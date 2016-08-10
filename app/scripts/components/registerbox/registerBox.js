'use strict';

angular.module('cath')
.directive('registerBox', function () {
  return {
    templateUrl: 'scripts/components/registerbox/registerBox.html',
    restrict: 'E',
    scope: {
      size: '@',
    },
    controller: 'registerBoxController',
  };
});
