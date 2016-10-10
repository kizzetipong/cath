
'use strict';

angular.module('cath')
.controller('casesViewController', ['$rootScope', '$scope', '$routeParams', '$sce', 'caseService',
  function ($rootScope, $scope, $routeParams, $sce, caseService) {
    console.log("33333333333")
    $scope.view_list = function () {
      $scope.params = $routeParams;
      $scope.type = $scope.params.type || 'all';
    };

    $scope.view = function () {
      $scope.params = $routeParams;
      $scope.id = $scope.params.id || '';
    };
   console.log($routeParams);

    if ($routeParams.id) {
        $scope.dataReady = false;
        caseService.fetchData($routeParams.id).then(function (ret) {
            $scope.dataReady = true;
            //$scope.list = ($scope.stage === 'all') ? ret : _.filter(ret, {stage: $scope.stage});
            ret[0].detail = $sce.trustAsHtml(ret[0].detail)
            $scope.data = ret[0];
            $scope.detail = ret[0].detail;
            $scope.$applyAsync();
        });
        $scope.view();
    } else {
        $scope.dataReady = false;
        caseService.fetchList($routeParams.type).then(function (ret) {

            $scope.list = ($scope.type === 'all') ? ret : _.filter(ret, {type: $scope.type});
            console.log($scope)
            for (var i=0; i<$scope.list.length;i++) {
                console.log($scope.list[i]);

                $scope.list[i].briefText = $scope.list[i].briefText == null ? "" : $scope.list[i].briefText.substring(0,100)+"...";
                $scope.list[i].detail = $sce.trustAsHtml($scope.list[i].detail.substring(0,600)+"...");

            }
            $scope.dataReady = true;
            $scope.$applyAsync();
        });
        $scope.view_list();
    }
  },
]);
