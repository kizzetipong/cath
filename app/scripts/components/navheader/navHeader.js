'use strict';

angular.module('angular-seed')
.directive('navHeader', function () {
  return {
    templateUrl: 'scripts/components/navheader/navHeader.html',
    restrict: 'E',
    scope: {
    },
    controller: 'navHeaderController',
  };
});
