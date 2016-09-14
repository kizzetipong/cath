'use strict';

angular.module('cath')
.controller('CaseController', ['$rootScope', '$scope', '$routeParams', '$sce', 'caseService',
  function ($rootScope, $scope, $routeParams, $sce, caseService) {
    $scope.view_list = function () {
      $scope.params = $routeParams;
      $scope.type = $scope.params.type || 'all';
    };

    $scope.view = function () {
      $scope.params = $routeParams;
      $scope.id = $scope.params.id || '';
    };
    //console.log($scope);

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
        $scope.view_list();    
    }
  },
]);
