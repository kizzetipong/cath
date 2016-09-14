'use strict';

angular.module('cath')
.directive('caseList', function () {
  return {
    templateUrl: 'scripts/components/caselist/caseList.html',
    restrict: 'E',
    scope: {
      type: '@',
    },
    controller: 'caseListController',
  };
});
