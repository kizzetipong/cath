'use strict';

angular.module('cath')
.directive('catalogFloatlist', function () {
  return {
    templateUrl: 'scripts/components/catalogfloatlist/catalogFloatlist.html',
    restrict: 'E',
    scope: {
      catalog: '@',
    },
    controller: 'catalogFloatlistController',
  };
});
