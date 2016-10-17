'use strict';

angular.module('cath')
.controller('articleDisplayController', ['$rootScope', '$scope', '$routeParams', '$sce', 'newscatalogService', function ($rootScope, $scope, $routeParams, $sce, newscatalogService) {
  $scope.dataReady = false;
  $scope.params = $routeParams;
  $scope.id = $scope.params.articleId || ''
      
  newscatalogService.fetchData($scope.id).then(function (ret) {
    $scope.dataReady = true;
    ret[0].detail = $sce.trustAsHtml(ret[0].detail)
    $scope.data = ret[0];
    $scope.detail = ret[0].detail;
    $scope.$applyAsync();    

    $scope.authorImage = '/assets/images/sys/writer-large.png'; //TODO: Mockdata
  });
}]);
