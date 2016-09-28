'use strict';

angular.module('cath')
.controller('articlesListController', ['$rootScope', '$scope', 'newscatalogService', function ($rootScope, $scope, newscatalogService) {
  $scope.dataReady = false;

  // newscatalogService.fetchList($scope.catalog).then(function (ret) {
  newscatalogService.fetchMock($scope.catalog).then(function (ret) {
    $scope.dataReady = true;
    $scope.list = _.take(ret, $scope.count);
    $scope.$applyAsync();
  });
}]);
