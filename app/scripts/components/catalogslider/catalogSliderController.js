'use strict';

angular.module('angular-seed')
.controller('catalogSliderController', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService) {
  $scope.dataReady = false;
  
  myService.fetchData($scope.catalog).then(function (ret) {
    $scope.dataReady = true;
    $scope.list = ret;
    $scope.$applyAsync();
  });
}]);
