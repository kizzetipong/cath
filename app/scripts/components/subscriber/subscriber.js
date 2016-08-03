'use strict';

angular.module('angular-seed')
.directive('subscriber', function () {
  return {
    templateUrl: 'scripts/components/subscriber/subscriber.html',
    restrict: 'E',
    scope: {
      size: '@',
    },
    controller: 'subscriberController',
  };
});
