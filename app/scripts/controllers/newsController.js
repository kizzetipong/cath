'use strict';

angular.module('cath')
.controller('NewsController', ['$rootScope', '$scope', '$routeParams',
  function ($rootScope, $scope, $routeParams) {
  $scope.init = function () {
    $rootScope.mainBg = '';
    $scope.params = $routeParams;
  };

  $scope.init();
  },
]);
