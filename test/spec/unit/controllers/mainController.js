'use strict';

describe('Controller: MainController', function () {
  var MainController;
  var routeParams = {};
  var scope;

  // load the controller's module
  beforeEach(module('angular-seed'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    MainController = $controller('MainController', {
      $rootScope: $rootScope,
      $scope: scope,
      $routeParams: routeParams,
    });

    scope.$digest();
  }));

  it('init should show Hello World', function () {
    scope.init();
    MainController.compute();
    expect(scope.helloWorld).toBe('Hello World');
  });
});
