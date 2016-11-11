'use strict';

angular.module('cath')
.service('caseService', ['AppConfig',
  function ($appConfig) {
    var data;
    this.url = $appConfig.DB_URL;
    return {
      fetchList: function (type) {
        var deferred = new $.Deferred();

        $.ajax({
          method: 'POST',
          url: '/node/case_list',
          data: { type: type },
          success: $.proxy(function (ret) {
            deferred.resolve(ret);
          }, this),
          error: $.proxy(function () {
            console.log('ERROR');
            deferred.resolve([]);
          }, this),
        });
        return deferred.promise();
      },

      fetchData: function (id) {
        var deferred = new $.Deferred();

        $.ajax({
          method: 'POST',
          url: '/node/case',
          data: { id: id },
          success: $.proxy(function (ret) {
            deferred.resolve(ret);
          }, this),
          error: $.proxy(function () {
            console.log('ERROR');
            deferred.resolve([]);
          }, this),
        });
        return deferred.promise();
      },

      getLatestData: function () {
        return data;
      },
    };
  },
]);
