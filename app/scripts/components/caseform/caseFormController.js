'use strict';

angular.module('cath')
.controller('caseFormController', ['$scope', 'caseFormsService', 'toastr', function ($scope, caseFormsService, toastr) {
  $scope.submitData = {};
  $scope.dataReady = false;
  $scope.errorMsg = '';
  if ($scope.formId) {
    caseFormsService.fetchData($scope.formId).then(function (ret) {
      if (ret && ret.length > 0) {
        $scope.data = ret[0];
        $scope.template = JSON.parse($scope.data.template);
        $scope.dataReady = true;
      } else {
        $scope.errorMsg = 'ไม่พบแบบฟอร์ม ' + $scope.id;
      }
      $scope.$applyAsync();

      _.defer(function () {
        $('[data-toggle="popover"]').popover();
      });
    });
  } else {
    $scope.errorMsg = 'formId is not available';
    $scope.$applyAsync();
  }

  $scope.validateData = function (sData) {
    // TODO: validate type of data before submit
  };

  $scope.submitForm = function () {
    $scope.validateData($scope.submitData);

    $.ajax({
      method: 'POST',
      url: '/node/forms_submitted',
      data: {
        form: $scope.formId,
        data: JSON.stringify($scope.submitData),
      },
      success: $.proxy(function (ret) {
        console.log(ret);
        toastr.success('คุณได้ทำการส่งข้อมูลให้เราสำเร็จแล้ว', 'ร่วมฟ้องกลุ่มสำเร็จ', {
          closeButton: true,
        });
        $scope.submitData = {};
        $scope.$applyAsync();
      }, this),
      error: $.proxy(function (err) {
        console.log('ERROR', err);
        toastr.error('โปรดติดต่อเจ้าหน้าที่: ' + err.statusText + ': ' + err.responseText, 'ร่วมฟ้องผิดพลาด', {
          closeButton: true,
        });
        // TODO: show error and correction
      }, this),
    });
  };
}]);
