'use strict';

angular.module('cath')
.service('caseService', ['AppConfig',
  function ($appConfig) {
    var list;
    this.url = $appConfig.DB_URL;
    return {
      fetchList: function (type) {
        var deferred = new $.Deferred();

        if (this.getLatestList()) {
          deferred.resolve(_.cloneDeep(this.getLatestList()));
        } else {
          $.ajax({
            method: 'POST',
            url: '/node/case_list',
            data: { type: type },
            success: $.proxy(function (ret) {
              list = ret;
              deferred.resolve(_.cloneDeep(ret));
            }, this),
            error: $.proxy(function () {
              console.log('ERROR');
              deferred.resolve([]);
            }, this),
          });
        }
        return deferred.promise();
      },

      fetchData: function (id, code) {
        var deferred = new $.Deferred();

        $.ajax({
          method: 'GET',
          url: '/node/case',
          data: { id: id, code: code },
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

      saveData: function (sData) {
        var deferred = new $.Deferred();
        $.ajax({
          method: 'POST',
          url: '/node/case',
          data: sData,
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

      getCount: function (id, code) {
        var deferred = new $.Deferred();
        $.ajax({
          method: 'GET',
          url: '/node/submitted_count',
          data: {
            mode: 'form',
            caseId: id,
            codeId: code,
          },
          success: $.proxy(function (ret) {
            if (ret && ret[0]) {
              deferred.resolve(ret[0]);
            } else {
              deferred.resolve([]);
            }
          }, this),
          error: $.proxy(function () {
            console.log('ERROR');
            deferred.resolve([]);
          }, this),
        });
        return deferred.promise();
      },


      getLatestList: function () {
        return list;
      },
    };
  },
]);
