'use strict';

angular.module('cath')
.directive('introSlider', function () {
  return {
    templateUrl: 'scripts/components/introslider/introSlider.html',
    restrict: 'E',
    scope: {
      catalogTitle: '@',
      catalog: '@',
    },
    controller: 'introSliderController',
  };
});
