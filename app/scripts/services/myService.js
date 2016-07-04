'use strict';

angular.module('angular-seed')
.service('myService', ['AppConfig',
  function ($appConfig) {
    var metadata;
    this.url = $appConfig.UDF_URL;

    return {
      requestMetadata: function () {
        metadata = { data: 'MockData' };
        return;
      },
      getMetadata: function () {
        return metadata;
      },
    };
  },
]);
