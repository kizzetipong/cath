'use strict';

angular.module('cath')
.directive('simpleHeader', function () {
  return {
    templateUrl: 'scripts/components/simpleheader/simpleHeader.html',
    restrict: 'E',
    scope: {
    	bgRed: '@',
    },
    controller: 'simpleHeaderController',
  };
});
