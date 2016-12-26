'use strict';

angular.module('cath')
.controller('registerBoxController', ['$scope', 'FileUploader', 'toastr', function ($scope, FileUploader, toastr) {
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
        toastr.error(item.name + ' have exceed max size', 'Error', {
          closeButton: true,
        });
        console.log(item.name, ' have exceed max size');
      }
      if (filter.name === 'fileTypeException') {
        toastr.error(item.name + ' is not image file', 'Error', {
          closeButton: true,
        });
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

  // TODO: validate data before submit
  $scope.validateData = function (sData) {
    if (sData) {
      sData.damages = _.parseInt(_.replace(sData.damages, ',', '')) || undefined;
    }
  };

  $scope.submitComplaint = function () {
    if ($scope.uploader.queue && $scope.uploader.queue.length > 0) {
      $scope.submitData.files = _($scope.uploader.queue)
      .map('apiInfo.response.filelink')
      .compact()
      .value()
      .toString();
    }
    $scope.validateData($scope.submitData);

    $.ajax({
      method: 'POST',
      url: '/node/complaint',
      data: $scope.submitData,
      success: $.proxy(function (ret) {
        console.log(ret);
        toastr.success('คุณได้ทำการส่งข้อมูลเให้เราสำเร็จแล้ว เราจะติดต่อกลับไปหาท่าน', 'ส่งฟ้องสำเร็จ', {
          closeButton: true,
        });
        $scope.submitData = {};
        $scope.uploader.clearQueue();
        $scope.$applyAsync();
      }, this),
      error: $.proxy(function (err) {
        console.log('ERROR', err);
        toastr.error('โปรดติดต่อเจ้าหน้าที่: ' + err.statusText + ': ' + err.responseText, 'ส่งฟ้องผิดพลาด', {
          closeButton: true,
        });
        // TODO: show error and correction
      }, this),
    });
  };

  _.defer(function () {
    $('[data-toggle="popover"]').popover();
  });
}]);
