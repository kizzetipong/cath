'use strict';

angular.module('angular-seed')
.directive('myDirective', function () {
  return {
    templateUrl: 'scripts/components/mydirective/myDirective.html',
    restrict: 'E',
    scope: {
      data: '@',
    },

    link: function (scope /* , element, attrs */) {
      scope.isShowNoData = false;
      scope.data = 'DATA';
    },
  };
});
