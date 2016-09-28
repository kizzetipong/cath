'use strict';

angular.module('cath')
.directive('articlesList', function () {
  return {
    templateUrl: 'scripts/components/articleslist/articlesList.html',
    restrict: 'E',
    scope: {
      catalog: '@',
      count: '@',
    },
    controller: 'articlesListController',
  };
});
