'use strict';

angular.module('cath')
.directive('navHeader', function () {
  return {
    templateUrl: 'scripts/components/navheader/navHeader.html',
    restrict: 'E',
    scope: {
    },
    controller: 'navHeaderController',
  };
});
