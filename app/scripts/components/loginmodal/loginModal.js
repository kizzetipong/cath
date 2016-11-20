'use strict';

angular.module('cath')
.directive('loginModal', function () {
  return {
    templateUrl: 'scripts/components/loginmodal/loginModal.html',
    restrict: 'E',
    scope: {
    },
    controller: 'loginModalController',
  };
});
