'use strict';

angular.module('angular-seed')
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
