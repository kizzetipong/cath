'use strict';

angular.module('cath')
.directive('searchBox', function () {
  return {
    templateUrl: 'scripts/components/searchbox/searchBox.html',
    restrict: 'E',
    scope: {
    },
    controller: 'searchBoxController',
  };
});
