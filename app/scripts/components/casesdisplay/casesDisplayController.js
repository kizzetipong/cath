
'use strict';

angular.module('cath')
.controller('casesDisplayController', ['$scope', '$sce', 'caseService', 'facebook', '$translate',
  function ($scope, $sce, caseService, facebook, $translate) {
    $scope.dataReady = false;
    $scope.errorMsg = '';
    $scope.sCount = '--';
    $scope.lang = 'th';

    $scope.$watch('lang', function (newValue) {
      $translate.use(newValue);
      if (newValue === 'en') {
        $scope.detail = $scope.detailEn;
        $scope.teaser = '';
      } else {
        $scope.detail = $scope.detailTh;
        $scope.teaser = _.get($scope.data, 'teaser');
      }
    });

    if ($scope.id || $scope.code) {
      caseService.fetchData($scope.id, $scope.code).then(function (ret) {
        if (ret && ret.length > 0) {
          $scope.detailTh = $sce.trustAsHtml(ret[0].detail);
          $scope.detailEn = $sce.trustAsHtml(ret[0].detailEn);
          $scope.data = ret[0];
          $scope.headlineText = $scope.data.headlineText;
          $scope.briefText = $scope.data.briefText;
          $scope.teaser = $scope.data.teaser;
          $scope.detail = $scope.detailTh;
          $scope.dataReady = true;
        } else {
          $scope.errorMsg = 'ไม่พบคดีกลุ่ม ' + ($scope.code || $scope.id);
        }
        $scope.$applyAsync();
      });

      caseService.getCount($scope.id, $scope.code).then(function (ret) {
        if (ret && ret.count) {
          $scope.sCount = ret.count;
          $scope.$applyAsync();
        }
      });
    } else {
      $scope.errorMsg = 'NewsId is not available';
      $scope.$applyAsync();
    }

    $scope.shareFB = function (code) {
      var href = 'http://www.fongdi.com/';
      if (code || $scope.data.code) {
        href += 'ร่วมฟ้อง/' + (code || $scope.data.code);
      } else {
        href += 'cases/' + $scope.id;
      }
      facebook.ui({
        method: 'share',
        href: href,
      }, function (response) {
        console.log(response);
      });
    };

    $scope.scrollTo = function (divId) {
      var $div = $('#' + divId);
      if ($div.length > 0) {
        $('html, body').animate({ scrollTop: $div.offset().top }, 1000, 'easeInOutCirc');
      }
    };

    $scope.changeLang = function (lang) {
      $scope.lang = lang;
      $scope.$applyAsync();
    };
  },
]);
