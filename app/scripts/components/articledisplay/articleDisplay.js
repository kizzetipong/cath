'use strict';

angular.module('cath')
.directive('articleDisplay', function () {
  return {
    templateUrl: 'scripts/components/articledisplay/articleDisplay.html',
    restrict: 'E',
    scope: {
      newsId: '@',
    },
    controller: 'articleDisplayController',
  };
});
