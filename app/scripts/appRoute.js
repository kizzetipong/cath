'use strict';

angular.module('angular-seed')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  // TODO: implement routes
  .when('/news/:type?/', {
    controller: 'NewsController',
    templateUrl: 'views/newsView.html',
  })
  .when('/settlements/:type?', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/investigations/:type?', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/attorneys/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/search/:keywords?', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/tags/:tags?', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .otherwise({
    redirectTo: '/',
  });
  
  $locationProvider.html5Mode(true);
});
