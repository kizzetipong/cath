'use strict';

angular.module('cath')
.service('myService', ['AppConfig',
  function ($appConfig) {
    var data;
    this.url = $appConfig.DB_URL;
    return {
      fetchData: function (cat) {
        var deferred = new $.Deferred();

        $.ajax({
          method: 'POST',
          url: '/node/mynodeservice',
          data: { catalog: cat },
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
