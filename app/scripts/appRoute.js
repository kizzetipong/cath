'use strict';

angular.module('cath')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/news/catalog/:catalog?/', {
    controller: 'NewsCatalogController',
    templateUrl: 'views/newsCatalogView.html',
  })
  .when('/news/:articleId?/', {
    controller: 'NewsController',
    templateUrl: 'views/newsView.html',
  })

  .when('/cases/new', {
    controller: 'CaseNewController',
    templateUrl: 'views/caseNew.html',
  })

  .when('/cases/:id?', {
    controller: 'CaseController',
    templateUrl: 'views/caseView.html',
  })

  .when('/cases/s/:type?', {
    controller: 'CaseViewController',
    templateUrl: 'views/caseViewList.html',
  })

  .when('/cases/:stage/c/:catalog?', {
    controller: 'NewsController',
    templateUrl: 'views/newsView.html',
  })
  .when('/attorneys/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/faqs/', {
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
  .when('/comps', {
    templateUrl: 'views/compsDisplay.html',
  })
  // TODO: Routes for Admin
  .when('/admin/news/:articleId?/', {
    controller: 'AdminNewsController',
    templateUrl: 'views/adminNewsView.html',
  })
  .when('/admin/news/catalog/:catalog?/', {
    controller: 'NewsCatalogController',
    templateUrl: 'views/newsCatalogView.html',
  })
  .otherwise({
    redirectTo: '/',
  });

  $locationProvider.html5Mode(true);
});
