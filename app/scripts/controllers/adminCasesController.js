'use strict';

angular.module('cath')
.controller('AdminCasesController', ['$rootScope', '$scope', '$routeParams', 'caseService',
  function ($rootScope, $scope, $routeParams, caseService) {
    $scope.init = function () {
      $scope.dataReady = false;
      $scope.content = '';
      $rootScope.mainBg = '';
      $scope.params = $routeParams;
      $scope.loadData();
    };

    $scope.loadData = function () {
      if ($scope.params.caseId) {
        caseService.fetchData($scope.params.caseId).then(function (ret) {
          if (ret && ret.length > 0) {
            $scope.data = ret[0];
            $scope.detail = ret[0].detail;
            $scope.dataReady = true;
            _.delay(function () {
              $('#summernote').summernote({
                focus: true,
                dialogsInBody: true,
                callbacks: {
                  onImageUpload: function (image) {
                    $scope.uploadImage(image[0], this);
                  },
                },
              });
              $('#summernote').summernote('code', ret[0].detail);
            }, 500);
          } else {
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
      $scope.content = $('#summernote').summernote('code');
      console.log($scope.content);
    };

    $scope.saveContent = function () {
      $scope.content = $('#summernote').summernote('code');
      $scope.detail = $scope.content;
      $scope.data.detail = $scope.detail;
      caseService.saveData($scope.data).then(function (ret) {
        console.log(ret);
      });
      // TODO: save other fields
    };

    $scope.uploadImage = function (image, el) {
      var data = new FormData();
      data.append('file', image);
      $.ajax({
        type: 'POST',
        url: 'node/upload/admin/uploadfile',
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function (response) {
          $(el).summernote('editor.insertImage', response.filelink, response.filename);
        },
        error: function (err) {
          console.log(err);
        },
      });
    };

    $scope.init();

    $scope.$on('$destroy', function () {
      $('#summernote').summernote('destroy');
    });
  },
]);
