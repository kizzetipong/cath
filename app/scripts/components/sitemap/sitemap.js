'use strict';

angular.module('cath')
.directive('sitemap', function () {
  return {
    templateUrl: 'scripts/components/sitemap/sitemap.html',
    restrict: 'E',
    scope: {
    },
    controller: 'sitemapController',
  };
});
