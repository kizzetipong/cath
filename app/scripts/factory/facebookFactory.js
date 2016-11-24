'use strict';

angular.module('cath').factory('facebookFactory', function ($q) {
  return {
    meData: {},
    pageId: '1199108503443090',
    accountData: {},
    getMyLastName: function () {
      var deferred = $q.defer();
      FB.api('/me', {
        fields: 'last_name',
      }, function (response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          deferred.resolve(response);
        }
      });
      return deferred.promise;
    },
    getUserInfo: function () {
      var deferred = $q.defer();

      FB.api('/me', function (response) {
        if (!response || response.error) {
          deferred.reject('Error occured');
        } else {
          deferred.resolve(response);
        }
      });
      return deferred.promise;
    },
    getAccountData: function () {
      var deferred = $q.defer();

      if (this.meData) {
        FB.api('/' + this.meData.id + '/accounts', function (response) {
          if (!response || response.error) {
            deferred.reject('Error occured');
          } else {
            if (response.data && response.data.length > 0) {
              this.accountData = _.find(response.data, { id: this.pageId });
              deferred.resolve(this.accountData);
            }
            deferred.reject('This user do not have FD page as admin');
          }
        });
      }
      return deferred.promise;
    },
  };
});
