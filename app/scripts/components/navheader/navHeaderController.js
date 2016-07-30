'use strict';

angular.module('angular-seed')
.controller('navHeaderController', ['$rootScope', '$scope', 'firebaseFactory', function ($rootScope, $scope, firebaseFactory) {
  // TODO:
  firebaseFactory.initFirebase();
}]);
