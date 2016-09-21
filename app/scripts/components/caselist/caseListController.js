'use strict';

angular.module('cath')
.controller('caseListController', ['$rootScope', '$scope', 'caseService', function ($rootScope, $scope, caseService) {
  $scope.dataReady = false;
  console.log($scope);
  caseService.fetchList($scope.type).then(function (ret) {

    $scope.dataReady = true;
    $scope.list = ($scope.type === 'all') ? ret : _.filter(ret, {type: $scope.type});
    $scope.$applyAsync();
  });
}]);
