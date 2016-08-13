'use strict';

angular.module('cath')
.controller('introSliderController', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService) {
  $scope.dataReady = false;
  $scope.calcHeight = 620;
  $scope.calcWidth = $(window).width();
  
  myService.fetchData($scope.catalog).then(function (ret) {
    $scope.dataReady = true;
    $scope.list = ret;
    $scope.$applyAsync();
  });
  $(window).resize(function () {
  	$scope.calcHeight = $(window).width() / 2;
  	$scope.calcWidth = $(window).width();
  	$scope.$applyAsync();
  });
}]);
