'use strict';

angular.module('cath')
.controller('navHeaderController', ['$rootScope', '$scope', 'firebaseFactory', function ($rootScope, $scope, firebaseFactory) {
  firebaseFactory.initFirebase();

  $scope.signInGG = function() {
  	firebaseFactory.signInGG();
  }
}]);
