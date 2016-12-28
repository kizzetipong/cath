
'use strict';

angular.module('cath')
.controller('casesDisplayController', ['$scope', '$sce', 'caseService',
  function ($scope, $sce, caseService) {
    $scope.dataReady = false;
    $scope.errorMsg = '';

    if ($scope.id) {
      caseService.fetchData($scope.id).then(function (ret) {
        if (ret && ret.length > 0) {
          ret[0].detail = $sce.trustAsHtml(ret[0].detail);
          $scope.data = ret[0];
          $scope.detail = ret[0].detail;
          $scope.dataReady = true;
        } else {
          $scope.errorMsg = 'ไม่พบคดีกลุ่ม ' + $scope.id;
        }
        $scope.$applyAsync();
      });
    } else {
      $scope.errorMsg = 'NewsId is not available';
      $scope.$applyAsync();
    }
  },
]);
