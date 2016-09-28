'use strict';

angular.module('cath')
.controller('searchBoxController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $('.search').keypress(function (e) {
    if (e.which == 13) {
      $scope.searchText = e.currentTarget.value;
      $scope.navigate($scope.searchText);
      return false;
    }
  });

  $scope.iconClick = function () {
    $scope.searchText = $('.search').val();
    $scope.navigate($scope.searchText);
  };

  $scope.navigate = function (text) {
    window.location.href = '/search/' + text;
  };
}]);
