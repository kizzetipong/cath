'use strict';

angular.module('cath')
.controller('AdminNewsController', ['$rootScope', '$scope', '$routeParams', '$sce', 'newscatalogService',
  function ($rootScope, $scope, $routeParams, $sce, newscatalogService) {
  $scope.init = function () {
    $scope.dataReady = false;
    $rootScope.mainBg = '';
    $scope.params = $routeParams;
    $scope.loadData();
  };

  $scope.loadData = function () {
    if ($scope.params.articleId) {
      newscatalogService.fetchData($scope.params.articleId).then(function (ret) {
        if (ret && ret.length > 0) {
          $scope.data = ret[0];
          $scope.detail = $sce.trustAsHtml(ret[0].detail);
          $scope.dataReady = true;
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
  }

  $scope.init();
  },
]);
