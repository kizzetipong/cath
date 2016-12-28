'use strict';

angular.module('cath')
.service('caseFormsService', ['AppConfig',
  function ($appConfig) {
    this.url = $appConfig.DB_URL;
    return {
      fetchData: function (id) {
        var deferred = new $.Deferred();

        $.ajax({
          method: 'POST',
          url: '/node/case_forms',
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
    };
  },
]);
