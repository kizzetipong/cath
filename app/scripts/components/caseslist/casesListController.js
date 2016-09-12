'use strict';

angular.module('cath')
.controller('casesListController', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService) {
  $scope.dataReady = false;

  myService.fetchData('cases').then(function (ret) {
    $scope.dataReady = true;
    $scope.list = ($scope.stage === 'all') ? ret : _.filter(ret, { stage: $scope.stage });
    $scope.$applyAsync();
  });
}]);
