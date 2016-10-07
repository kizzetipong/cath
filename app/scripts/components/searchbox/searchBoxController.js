'use strict';

angular.module('cath')
.controller('searchBoxController', ['$rootScope', '$scope', function ($rootScope, $scope) {
  $('.search-input').keypress(function (e) {
    if (e.which === 13) {
      $scope.searchText = e.currentTarget.value;
      $scope.navigate($scope.searchText);
      return false;
    }
  });

  $scope.iconClick = function (e) {
    $scope.searchText = $(e.currentTarget).next().val();
    if (($scope.expanding !== 'false') && $scope.searchText) {
      $scope.navigate($scope.searchText);
    }
  };

  $scope.navigate = function (text) {
    window.location.href = '/search/' + text;
  };
}]);
