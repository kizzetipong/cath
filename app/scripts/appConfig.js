'use strict';

angular.module('cath')
.constant(
  'AppConfig', {
    DB_URL: '/',
  }
)
.config(function (facebookProvider, toastrConfig) {
  facebookProvider.setAppID('687329278084857');
  angular.extend(toastrConfig, {
    timeOut: 10000,
  });
});
