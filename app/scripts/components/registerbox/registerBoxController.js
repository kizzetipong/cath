'use strict';

angular.module('cath')
.controller('registerBoxController', ['$scope', 'FileUploader', function ($scope, FileUploader) {
  $scope.uploader = new FileUploader({
    url: 'node/uploadfile',
  });

  _.defer(function () {
    $('[data-toggle="popover"]').popover();
  });
}]);
