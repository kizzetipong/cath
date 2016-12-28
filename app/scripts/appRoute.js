'use strict';

angular.module('cath')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/news/catalog/:catalog?/', {
    title: 'กฎหมายน่ารู้ | ',
    controller: 'NewsCatalogController',
    templateUrl: 'views/newsCatalogView.html',
  })
  .when('/news/:articleId?/', {
    title: 'กฎหมายน่ารู้ | ',
    controller: 'NewsController',
    templateUrl: 'views/newsView.html',
  })

  .when('/cases/new', {
    title: 'ร่วมฟ้อง | ',
    controller: 'CaseNewController',
    templateUrl: 'views/caseNew.html',
  })

  .when('/cases/:id?', {
    title: 'ร่วมฟ้อง | ',
    controller: 'CaseController',
    templateUrl: 'views/caseView.html',
  })

  .when('/cases/s/:type?', {
    title: 'ร่วมฟ้อง | ',
    controller: 'CaseViewController',
    templateUrl: 'views/caseViewList.html',
  })

  .when('/cases/:stage/c/:catalog?', {
    title: 'ร่วมฟ้อง | ',
    controller: 'NewsController',
    templateUrl: 'views/newsView.html',
  })
  .when('/attorneys/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/faqs/', {
    title: 'ถามได้ | ',
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
})
.run(['$rootScope', '$route', function ($rootScope, $route) {
  $rootScope.$on('$routeChangeSuccess', function (newVal, oldVal) {
    if (oldVal !== newVal) {
      document.title = ($route.current.title || '') + 'FongDi ฟ้องได้ | fongdi.com | แพลตฟอร์มเพื่อสังคมที่เป็นธรรม';
    }
  });
}]);
