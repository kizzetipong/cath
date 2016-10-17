
'use strict';

angular.module('cath')
.controller('casesListController', ['$scope', '$sce', 'caseService',
  function ($scope, $sce, caseService) {
    $scope.dataReady = false;

    if ($scope.type) {
      caseService.fetchList($scope.type).then(function (ret) {
        $scope.list = ($scope.type === 'all') ? ret : _.filter(ret, {type: $scope.type});
        for (var i=0; i<$scope.list.length;i++) {

          $scope.list[i].briefText = $scope.list[i].briefText == null ? "" : $scope.list[i].briefText.substring(0,100)+"...";
          $scope.list[i].detail = $sce.trustAsHtml($scope.list[i].detail.substring(0,600)+"...");
        }
        $scope.dataReady = true;
        $scope.$applyAsync();
      });
    }
  },
]);
