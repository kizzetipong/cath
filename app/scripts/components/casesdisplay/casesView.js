'use strict';

angular.module('cath')
.directive('casesView', function () {
  return {
    templateUrl: 'scripts/components/casesview/casesView.html',
    restrict: 'E',
    scope: {
      stage: '@',
    },
    controller: 'casesViewController',
  };
});
