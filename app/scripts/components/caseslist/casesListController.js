
'use strict';

angular.module('cath')
.controller('casesListController', ['$scope', '$sce', 'caseService', 'facebook',
  function ($scope, $sce, caseService, facebook) {
    $scope.dataReady = false;
    $scope.errorMsg = '';
    $scope.sCount = '--';

    if ($scope.type) {
      caseService.fetchList($scope.type).then(function (ret) {
        $scope.list = ($scope.type === 'all') ? ret : _.filter(ret, { type: $scope.type });
        if ($scope.list && $scope.list.length > 0) {
          $scope.errorMsg = '';
          for (var i = 0; i < $scope.list.length; i++) {
            $scope.list[i].briefText = $scope.list[i].briefText || '';
            $scope.list[i].detail = $sce.trustAsHtml($scope.list[i].detail.substring(0, 600) + '...');
          }
          $scope.dataReady = true;
        } else {
          $scope.errorMsg = 'ยังไม่มีคดีกลุ่มที่กำลังดำเนินการอยู่ในขณะนี้';
        }

        $scope.$applyAsync();
      });

      caseService.getCount().then(function (ret) {
        if (ret && ret.count) {
          $scope.sCount = ret.count;
          $scope.$applyAsync();
        }
      });
    }

    $scope.shareFB = function (id) {
      facebook.ui({
        method: 'share',
        href: 'http://www.fongdi.com/cases/' + id,
      }, function (response) {
        console.log(response);
      });
    };
  },
]);
