'use strict';

angular.module('cath')
.controller('simpleHeaderController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $scope.theme = $scope.bgRed ? 'white' : 'red';
  $scope.expandMenu = false;
  $scope.expandSearch = false;
}]);
