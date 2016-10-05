'use strict';

angular.module('cath')
.controller('MainController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
    $scope.init = function () {
      $scope.params = $routeParams;
      $rootScope.mainBg = 'red';
      console.log($scope.params);
    };

    $scope.init();
  },
]);
