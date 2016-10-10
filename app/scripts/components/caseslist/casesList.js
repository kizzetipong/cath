'use strict';

angular.module('cath')
.directive('casesList', function () {
  return {
    templateUrl: 'scripts/components/caseslist/casesList.html',
    restrict: 'E',
    scope: {
      type: '@',
    },
    controller: 'casesListController',
  };
});
