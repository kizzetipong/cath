'use strict';

angular.module('cath')
.controller('articleDisplayController', ['$scope', '$sce', 'newscatalogService', function ($scope, $sce, newscatalogService) {
  $scope.dataReady = false;
  $scope.errorMsg = '';

  if ($scope.newsId) {
    newscatalogService.fetchData($scope.newsId).then(function (ret) {
      if (ret && ret.length > 0) {
        $scope.data = ret[0];
        $scope.detail = $sce.trustAsHtml($scope.data.detail);
        $scope.dataReady = true;
        $scope.thisURL = window.location.href;

        // TODO: newsId should keep author id and service should also retrieve author data
        // TODO: This is Mockdata
        if ($scope.data.author_id) {
          $scope.author = {
            penname: 'บัดดี้',
            shortBio: 'ผู้เฝ้าระวัง แห่งเวปฟ้องได้',
            authorImageS: '/assets/images/sys/authors/buddy_s.png',
            authorImage: '/assets/images/sys/authors/buddy.png',
          };
        }
      } else {
        $scope.errorMsg = 'Cannot retrieve data from NewsId ' + $scope.NewsId;
      }
      $scope.$applyAsync();
    });
  } else {
    $scope.errorMsg = 'NewsId is not available';
    $scope.$applyAsync();
  }
}]);
