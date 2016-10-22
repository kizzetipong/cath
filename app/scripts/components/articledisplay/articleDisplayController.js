'use strict';

angular.module('cath')
.controller('articleDisplayController', ['$scope', '$sce', 'newscatalogService', function ($scope, $sce, newscatalogService) {
  $scope.dataReady = false;
  $scope.errorMsg = '';

  if ($scope.newsId) {
    newscatalogService.fetchData($scope.newsId).then(function (ret) {
      if (ret && ret.length > 0) {
        $scope.data = ret[0];
        $scope.detail = $sce.trustAsHtml(ret[0].detail);
        $scope.dataReady = true;
        $scope.thisURL = window.location.href;

        //TODO: newsId should keep author id and service should also retrieve author data
        //TODO: This is Mockdata
        $scope.authorImageS = '/assets/images/sys/writer_small.png';
        $scope.authorImage = '/assets/images/sys/writer-large.png';
      }
      else {
        $scope.errorMsg = 'Cannot retrieve data from NewsId ' + $scope.NewsId;
      }
      $scope.$applyAsync();
    });
  } else {
    $scope.errorMsg = 'NewsId is not available';
    $scope.$applyAsync();
  }
}]);
