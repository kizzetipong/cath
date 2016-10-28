'use strict';

angular.module('cath')
.controller('registerBoxController', ['$scope', 'FileUploader', function ($scope, FileUploader) {
  $scope.uploader = new FileUploader({
    url: 'node/upload/uploadfile',
    formData: [
      { user: 'USER1' },
      { info: 'moreinfo' },
    ],
  });

  _.defer(function () {
    $('[data-toggle="popover"]').popover();
  });
}]);
