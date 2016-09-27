'use strict';

angular.module('cath')
.controller('registerBoxController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  _.defer(function () {
    // $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
  })
}]);
