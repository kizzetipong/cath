'use strict';

angular.module('cath')
.directive('casesDisplay', function () {
  return {
    templateUrl: 'scripts/components/casesdisplay/casesDisplay.html',
    restrict: 'E',
    scope: {
      id: '@',
      code: '@',
    },
    controller: 'casesDisplayController',
  };
});
