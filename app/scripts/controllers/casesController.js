'use strict';

angular.module('cath')
.controller('CasesController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
    $scope.init = function () {
      $scope.params = $routeParams;
      $scope.stage = $scope.params.stage || 'all';
    };

    $scope.init();
  },
]);
