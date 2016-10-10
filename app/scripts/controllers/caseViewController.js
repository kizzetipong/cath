'use strict';

angular.module('cath')
.controller('CaseViewController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
  $scope.init = function () {
    $rootScope.mainBg = '';
    $scope.params = $routeParams;
    $scope.type = $scope.params.type || 'all';
  };

  $scope.init();
  },
]);