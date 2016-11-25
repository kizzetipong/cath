'use strict';

angular.module('cath')
.constant(
  'AppConfig', {
    DB_URL: '/',
  }
)
.config(function (facebookProvider) {
  facebookProvider.setAppID('687329278084857');
});
