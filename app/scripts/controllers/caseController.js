'use strict';

angular.module('cath')
.controller('CaseController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
    $scope.init = function () {
      $rootScope.mainBg = '';
      
      $scope.params = $routeParams;
      $scope.id = $scope.params.id || '';
    };

    $scope.init();
  },
]);