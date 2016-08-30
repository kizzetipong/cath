'use strict';

angular.module('cath')
.directive('casesList', function () {
  return {
    templateUrl: 'scripts/components/caseslist/casesList.html',
    restrict: 'E',
    scope: {
      stage: '@',
    },
    controller: 'casesListController',
  };
});
