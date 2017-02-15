'use strict';

angular.module('cath')
.controller('AdminController', ['$rootScope', '$scope', '$routeParams', 'newscatalogService', 'toastr',
  function ($rootScope, $scope, $routeParams, newscatalogService, toastr) {
    $scope.dataReady = false;

    $scope.loadLocalStorage = function () {
      $scope.author_id = window.localStorage.getItem('author_id');
      $scope.token = window.localStorage.getItem('token');
    };

    $scope.saveLocalStorage = function () {
      window.localStorage.setItem('author_id', $scope.author_id);
      window.localStorage.setItem('token', $scope.token);
      toastr.info('ID / Token is saved');
    };

    $scope.toggleActive = function (item) {
      var data = _.cloneDeep(item);
      data.status = data.status === '3' ? '1' : '3'; // Active = 1, Inactive = 3
      data.author_id = $scope.author_id;
      data.token = $scope.token;
      newscatalogService.saveData(data).then(function (ret) {
        console.log(ret);
      });
    };

    $scope.init = function () {
      $rootScope.mainBg = '';
      $scope.params = $routeParams;
      $scope.catalog = $scope.params.catalog || 'all';
      $scope.loadLocalStorage();

      newscatalogService.fetchList($scope.catalog).then(function (ret) {
        $scope.dataReady = true;
        $scope.list = ret;
        $scope.$applyAsync();
      });
    };

    $scope.init();
  },
]);
