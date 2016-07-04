'use strict';

angular.module('angular-seed')
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .otherwise({
    redirectTo: '/',
  });
});
