'use strict';

angular.module('angular-seed')
.controller('navHeaderController', ['$rootScope', '$scope', 'firebaseFactory', function ($rootScope, $scope, firebaseFactory) {
  firebaseFactory.initFirebase();

  $scope.signInGG = function() {
  	firebaseFactory.signInGG();
  }
}]);
