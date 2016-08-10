'use strict';

angular.module('cath')
.controller('NewsController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
    $scope.init = function () {
      $scope.params = $routeParams;
      $scope.helloWorld = 'Hello World from News Controller' + JSON.stringify($scope.params);
    };

    $scope.init();
  },
]);
