'use strict';

angular.module('cath')
.controller('AdminController', ['$rootScope', '$scope', '$routeParams', 'newscatalogService',
  function ($rootScope, $scope, $routeParams, newscatalogService) {
    $scope.init = function () {
      $rootScope.mainBg = '';
      $scope.params = $routeParams;
      $scope.catalog = $scope.params.catalog || 'all';
    };

    $scope.init();

    $scope.dataReady = false;

    newscatalogService.fetchList($scope.catalog).then(function (ret) {
      $scope.dataReady = true;
      $scope.list = ret;
      $scope.$applyAsync();
    });
  },
]);
