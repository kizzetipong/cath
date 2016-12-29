'use strict';

angular.module('cath')
.controller('AdminCasesController', ['$rootScope', '$scope', '$routeParams', '$sce', 'caseService',
  function ($rootScope, $scope, $routeParams, $sce, caseService) {
  $scope.init = function () {
    $scope.dataReady = false;
    $scope.content = '';
    $scope.rOptions = {
      fixed: true,
      imageUpload: 'node/upload/admin/uploadfile',
      blurCallback: $scope.test,
    };
    $rootScope.mainBg = '';
    $scope.params = $routeParams;
    $scope.loadData();
  };

  $scope.loadData = function () {
    if ($scope.params.caseId) {
      caseService.fetchData($scope.params.caseId).then(function (ret) {
        if (ret && ret.length > 0) {
          $scope.data = ret[0];
          $scope.detail = $sce.trustAsHtml(ret[0].detail);
          $scope.dataReady = true;
        }
        else {
          $scope.errorMsg = 'Cannot retrieve data from CaseId ' + $scope.params.caseId;
        }
        $scope.$applyAsync();
      });
    } else {
      $scope.errorMsg = 'CaseId is not available';
      $scope.$applyAsync();
    }
  };

  $scope.getContent = function () {
    $scope.content = $('#editor-redactor').redactor().getCode();
    console.log($scope.content);
  };

  $scope.saveContent = function () {
    $scope.content = $('#editor-redactor').redactor().getCode();
    $scope.detail = $scope.content;
    $scope.data.detail = $scope.detail;
    caseService.saveData($scope.data).then(function (ret) {
      console.log(ret);
    });
    // TODO: save other fields
  };

  $scope.init();
  },
]);
