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
