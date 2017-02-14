'use strict';

angular.module('cath', ['ngRoute', 'ngMaterial', 'pascalprecht.translate', 'templateCache', 'ui.bootstrap', 'angularFileUpload', 'updateMeta', 'toastr']);
angular.module('templateCache', []);

angular.module('cath').provider('facebook', function () {
  var fbReady = false;
  this.appID = 'default';

  function fbInit(appID) {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/th_TH/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    window.fbAsyncInit = function () {
      FB.init({
        appId: appID,
        cookie: true,
        xfbml: true,
        version: 'v2.8',
      });
      fbReady = true;
    };
  }

  this.setAppID = function (appID) {
    this.appID = appID;
  };

  this.$get = function () {
    var appID = this.appID;
    var self = this;
    fbInit(appID);

    return {
      graph: function (path, cb, paramObj, method) {
        FB.api(path, method || 'get', paramObj, function (response) {
          cb(response);
        });
      },
      ui: function (options, cb) {
        FB.ui(options, function (response) {
          cb(response);
        });
      },
      getAuth: function () {
        return self.auth;
      },
      getLoginStatus: function (cb) {
        if (!fbReady) {
          setTimeout(function () {
            self.$get().getLoginStatus(cb);
          }, 100);
          console.log('fb not ready');
          return;
        }
        FB.getLoginStatus(function (response) {
          cb(response);
        });
      },
      login: function (cb, scope) {
        if (!fbReady) {
          self.$get().login(cb);
          console.log('fb not ready');
          return;
        }
        FB.login(function (response) {
          if (response.status === 'connected') {
            if (response.authResponse) {
              self.auth = response.authResponse;
              cb(self.auth);
            } else {
              console.log('connected: Facebook login failed', response);
            }
          } else if (response.status === 'not_authorized') {
            console.log('not_authorized: Facebook login failed', response);
          } else {
            console.log('Facebook login failed', response);
          }
        }, scope);
      },
      logout: function () {
        FB.logout(function (response) {
          if (response) {
            self.auth = null;
          } else {
            console.log('Facebook logout failed.', response);
          }
        });
      },
    };
  };
});
