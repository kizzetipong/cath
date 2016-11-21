'use strict';

angular.module('cath')
.controller('loginModalController', ['$scope', function ($scope) {
  $scope.formData = {};
  $scope.login = function (fData) {
    alert(JSON.stringify(fData));
    // TODO : send to loginService
  };
}]);
