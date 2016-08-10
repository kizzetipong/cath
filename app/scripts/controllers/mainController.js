'use strict';

angular.module('cath')
.controller('MainController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
    $scope.init = function () {
      $scope.params = $routeParams;
    };

    $scope.init();
  },
]);
