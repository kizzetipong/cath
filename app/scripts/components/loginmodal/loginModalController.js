'use strict';

angular.module('cath')
.controller('loginModalController', ['$scope', function ($scope) {
  $scope.options = {
    //
  };
  $scope.openModal = function () {
    $('#login-modal').modal($scope.options)
  }
}]);
