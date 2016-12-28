'use strict';

angular.module('cath')
.directive('caseForm', function () {
  return {
    templateUrl: 'scripts/components/caseform/caseForm.html',
    restrict: 'E',
    scope: {
      formId: '@',
    },
    controller: 'caseFormController',
  };
});
