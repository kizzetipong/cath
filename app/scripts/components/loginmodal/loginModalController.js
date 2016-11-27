'use strict';

angular.module('cath')
.controller('loginModalController', ['$scope', 'facebook', function ($scope, facebook) {
  $scope.isLogin = false;
  $scope.formData = {};
  $scope.fbScope = {
    scope: 'public_profile,email,pages_manage_instant_articles,pages_show_list',
  };
  $scope.login = function (fData) {
    alert(JSON.stringify(fData));
    // TODO : send to loginService
  };

  $scope.loginFB = function () {
    facebook.login($scope.loginSuccess, $scope.fbScope);
  };

  $scope.loginSuccess = function (auth) {
    $scope.isLogin = true;
    $('#login-modal').modal('toggle');
    $scope.fbAccessToken = auth.accessToken;
    facebook.graph('/me', _.debounce(function (resp) {
      // console.log(resp);
      // TODO : check with our DB if existed or not
      // TODO : if not exist: register into our DB
      // TODO : process as normal login
    }), { fields: 'email, first_name, last_name, gender' });
    facebook.graph('/me/accounts', _.debounce(function (resp) {
      var pageFD = _.find(resp.data, { id: '1199108503443090' });
      if (pageFD) {
        facebook.graph('1199108503443090/instant_articles', _.debounce(function (resp) {
          console.log(resp);
          // facebook.graph('1199108503443090/instant_articles', _.debounce(function (resp) {
          //   console.log(resp);
          // }), { html_source: html.replace('news/1', 'news/2') }, 'post');
        }));
      }
      console.log(resp);
    }));
  };
}]);
