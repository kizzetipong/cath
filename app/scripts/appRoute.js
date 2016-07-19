'use strict';

angular.module('angular-seed')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .otherwise({
    redirectTo: '/',
  });
  
  $locationProvider.html5Mode(true);
});
