'use strict';

angular
    .module('cath', ['angularFileUpload'])
    .controller('AppController', function($scope, FileUploader) {
        $scope.uploader = new FileUploader();
    });