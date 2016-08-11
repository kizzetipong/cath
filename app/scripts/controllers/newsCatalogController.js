'use strict';

angular.module('cath')
.controller('NewsCatalogController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
    $scope.init = function () {
      $scope.params = $routeParams;
      $scope.helloWorld = 'Hello World from NewsCatalog Controller' + JSON.stringify($scope.params);
    };

    $scope.init();
  },
]);
