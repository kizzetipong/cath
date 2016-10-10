
'use strict';

angular.module('cath')
.controller('casesDisplayController', ['$scope', '$sce', 'caseService',
  function ($scope, $sce, caseService) {
    $scope.dataReady = false;

    if ($scope.id) {
      caseService.fetchData($scope.id).then(function (ret) {
        //$scope.list = ($scope.stage === 'all') ? ret : _.filter(ret, {stage: $scope.stage});
        ret[0].detail = $sce.trustAsHtml(ret[0].detail)
        $scope.data = ret[0];
        $scope.detail = ret[0].detail;
        $scope.dataReady = true;
        $scope.$applyAsync();
      });
    }
  },
]);
