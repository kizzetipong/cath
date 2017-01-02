
'use strict';

angular.module('cath')
.controller('casesDisplayController', ['$scope', '$sce', 'caseService', 'facebook',
  function ($scope, $sce, caseService, facebook) {
    $scope.dataReady = false;
    $scope.errorMsg = '';
    $scope.sCount = '--';

    if ($scope.id || $scope.code) {
      caseService.fetchData($scope.id, $scope.code).then(function (ret) {
        if (ret && ret.length > 0) {
          ret[0].detail = $sce.trustAsHtml(ret[0].detail);
          $scope.data = ret[0];
          $scope.detail = ret[0].detail;
          $scope.dataReady = true;
        } else {
          $scope.errorMsg = 'ไม่พบคดีกลุ่ม ' + ($scope.code || $scope.id);
        }
        $scope.$applyAsync();
      });

      caseService.getCount($scope.id, $scope.code).then(function (ret) {
        if (ret && ret.count) {
          $scope.sCount = ret.count;
          $scope.$applyAsync();
        }
      });
    } else {
      $scope.errorMsg = 'NewsId is not available';
      $scope.$applyAsync();
    }

    $scope.shareFB = function (code) {
      var href = 'http://www.fongdi.com/';
      if (code || $scope.data.code) {
        href += 'ร่วมฟ้อง/' + (code || $scope.data.code);
      } else {
        href += 'cases/' + $scope.id;
      }
      facebook.ui({
        method: 'share',
        href: href,
      }, function (response) {
        console.log(response);
      });
    };
  },
]);
