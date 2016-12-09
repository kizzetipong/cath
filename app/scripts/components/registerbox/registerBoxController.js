'use strict';

angular.module('cath')
.controller('registerBoxController', ['$scope', 'FileUploader', function ($scope, FileUploader) {
  $scope.submitData = {};
  $scope.uploader = new FileUploader({
    url: 'node/upload/uploadfile',
    formData: [
      { user: 'USER1' },
      { info: 'moreinfo' },
    ],
    onSuccessItem: function (item, response, status, headers) {
      item.apiInfo = {
        response: response,
        status: status,
        headers: headers,
      };
    },
    onWhenAddingFileFailed: function (item, filter) {
      console.log('Fail to add file');
      if (filter.name === 'enforceMaxFileSize') {
        console.log(item.name, ' have exceed max size');
      }
      if (filter.name === 'fileTypeException') {
        console.log(item.name, ' is not image file');
      }
    },
  });
  $scope.uploader.filters.push({
    name: 'enforceMaxFileSize',
    fn: function (item) {
      return item.size <= 1048576; // 1 MB
    },
  });
  $scope.uploader.filters.push({
    name: 'fileTypeException',
    fn: function (item) {
      return /\.(png|jpeg|jpg|gif)$/i.test(item.name);
    },
  });

  $scope.submitComplaint = function () {
    if ($scope.uploader.queue && $scope.uploader.queue.length > 0) {
      $scope.submitData.files = _($scope.uploader.queue)
      .map('apiInfo.response.filelink')
      .compact()
      .value()
      .toString();
    }
    // TODO: validate data before submit
    console.log($scope.submitData);

    $.ajax({
      method: 'POST',
      url: '/node/complaint',
      data: $scope.submitData,
      success: $.proxy(function (ret) {
        console.log(ret);
        // TODO : show success notice
      }, this),
      error: $.proxy(function (err) {
        console.log('ERROR', err);
        // TODO : show error notice
      }, this),
    });
  };

  _.defer(function () {
    $('[data-toggle="popover"]').popover();
  });
}]);
