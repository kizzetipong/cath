'use strict';

angular.module('cath')
.controller('catalogFloatlistController', ['$rootScope', '$scope', 'newscatalogService', function ($rootScope, $scope, newscatalogService) {
  $scope.dataReady = false;

  newscatalogService.fetchList($scope.catalog).then(function (ret) {
    $scope.dataReady = true;
    $scope.list = ret;
    $scope.$applyAsync();
  });
}]);
