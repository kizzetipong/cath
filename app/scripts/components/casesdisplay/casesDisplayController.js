
'use strict';

angular.module('cath')
.controller('casesDisplayController', ['$scope', '$sce', 'caseService', 'facebook',
  function ($scope, $sce, caseService, facebook) {
    $scope.dataReady = false;
    $scope.errorMsg = '';
    $scope.sCount = '--';

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

      caseService.getCount().then(function (ret) {
        if (ret && ret.count) {
          $scope.sCount = ret.count;
          $scope.$applyAsync();
        }
      });
    } else {
      $scope.errorMsg = 'NewsId is not available';
      $scope.$applyAsync();
    }

    $scope.shareFB = function (id) {
      facebook.ui({
        method: 'share',
        href: 'https://www.fongdi.com/cases/' + id,
      }, function (response) {
        console.log(response);
      });
    };
  },
]);
