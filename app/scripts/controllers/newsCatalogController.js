'use strict';

angular.module('cath')
.controller('NewsCatalogController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
    $scope.init = function () {
      $scope.params = $routeParams;
      $scope.catalog = $scope.params.catalog || 'all';
    };

    $scope.init();
  },
]);
