'use strict';

angular.module('cath')
.directive('catalogSlider', function () {
  return {
    templateUrl: 'scripts/components/catalogslider/catalogSlider.html',
    restrict: 'E',
    scope: {
      catalogTitle: '@',
      catalog: '@',
    },
    controller: 'catalogSliderController',
  };
});
