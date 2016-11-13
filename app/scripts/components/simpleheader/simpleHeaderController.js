'use strict';

angular.module('cath')
.controller('simpleHeaderController', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
  $scope.params = $location.search();
  $scope.theme = $scope.bgRed === 'red' ? 'white' : 'red';
  $scope.expandMenu = false;
  $scope.expandSearch = false;
  $scope.hideMenu = $scope.params.menu === 'false' || false;
}]);
