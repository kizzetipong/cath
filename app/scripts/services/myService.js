'use strict';

angular.module('angular-seed')
.service('myService', ['AppConfig',
  function ($appConfig) {
    var data;
    this.url = $appConfig.DB_URL;
    return {
      fetchData: function (cat) {
        var deferred = new $.Deferred();
        // var mockData = {
        //   news: [
        //     {
        //       classId: '',
        //       headlineText: 'HEADLINE 1',
        //       date: '',
        //       img: '',
        //       briefText: '',
        //     },
        //     {
        //       classId: '',
        //       headlineText: 'HEADLINE 2',
        //       date: '',
        //       img: '',
        //       briefText: '',
        //     },
        //     {
        //       classId: '',
        //       headlineText: 'HEADLINE 3',
        //       date: '',
        //       img: '',
        //       briefText: '',
        //     },
        //     {
        //       classId: '',
        //       headlineText: 'HEADLINE 4',
        //       date: '',
        //       img: '',
        //       briefText: '',
        //     },
        //     {
        //       classId: '',
        //       headlineText: 'HEADLINE 5',
        //       date: '',
        //       img: '',
        //       briefText: '',
        //     },
        //   ],
        //   investigations: [
        //     {
        //       classId: '',
        //       headlineText: 'investigations 1',
        //       date: '',
        //       img: '',
        //       briefText: '',
        //     },
        //     {
        //       classId: '',
        //       headlineText: 'investigations 2',
        //       date: '',
        //       img: '',
        //       briefText: '',
        //     },
        //   ],
        //   settlements: [],
        // };
        // _.delay(function () { //TODO: should call real nodejs service
        //   deferred.resolve(_.get(mockData, cat));
        //   data = _.merge(data, _.get(mockData, cat));
        // }, 500);

        $.ajax({
          method: 'POST',
          url: '/service/mynodeservice',
          data: {catalog: cat},
          success: $.proxy(function (ret) {
            console.log('Success with' + JSON.stringify(ret));
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
