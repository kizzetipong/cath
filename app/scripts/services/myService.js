'use strict';

angular.module('angular-seed')
.service('myService', ['AppConfig',
  function ($appConfig) {
    var data;
    this.url = $appConfig.DB_URL;
    return {
      fetchData: function (cat) {
        var deferred = new $.Deferred();
        var mockData = {
          news: [
            {
              classId: '001',
              type: 'news',
              headlineText: 'HEADLINE 1',
              date: '03/08/2016',
              img: '/assets/images/news/1.jpg',
              briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past decade, Jos. A. Bank has faced allegations of false pricing by',
            },
            {
              classId: '002',
              type: 'news',
              headlineText: 'HEADLINE 2',
              date: '02/08/2016',
              img: '/assets/images/news/2.jpg',
              briefText: 'Alleged deceptive advertising at Jos.',
            },
            {
              classId: '003',
              type: 'news',
              headlineText: 'HEADLINE 3',
              date: '01/08/2016',
              img: '/assets/images/news/3.jpg',
              briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are.',
            },
            {
              classId: '004',
              type: 'news',
              headlineText: 'HEADLINE 4',
              date: '30/07/2016',
              img: '/assets/images/news/4.jpg',
              briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past decade, Jos. A. Bank has faced allegations of false pricing by',
            },
            {
              classId: '005',
              type: 'news',
              headlineText: 'HEADLINE 5',
              date: '29/07/2016',
              img: '/assets/images/news/5.jpg',
              briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past decade, Jos. A. Bank has faced allegations of false pricing by',
            },
          ],
          investigations: [
            {
              classId: '006',
              type: 'investigations',
              headlineText: 'Investigations 1',
              date: '03/08/2016',
              img: '/assets/images/investigations/1.jpg',
              briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
            },
            {
              classId: '007',
              type: 'investigations',
              headlineText: 'Investigations 2',
              date: '01/08/2016',
              img: '/assets/images/investigations/2.jpg',
              briefText: 'A settlement has been reached between BMW',
            },
          ],
          settlements: [],
        };
        _.delay(function () { //TODO: should call real nodejs service
          deferred.resolve(_.get(mockData, cat));
          data = _.merge(data, _.get(mockData, cat));
        }, 500);

        // $.ajax({
        //   method: 'POST',
        //   url: '/service/mynodeservice',
        //   data: {catalog: cat},
        //   success: $.proxy(function (ret) {
        //     console.log('Success with' + JSON.stringify(ret));
        //     deferred.resolve(ret);
        //   }, this),
        //   error: $.proxy(function () {
        //     console.log('ERROR');
        //     deferred.resolve([]);
        //   }, this),
        // });
        return deferred.promise();
      },
      getLatestData: function () {
        return data;
      },
    };
  },
]);
