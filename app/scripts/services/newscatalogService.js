'use strict';

angular.module('cath')
.service('newscatalogService', ['AppConfig',
  function ($appConfig) {
    var data;
    this.url = $appConfig.DB_URL;
    return {
      fetchList: function (type) {
        var deferred = new $.Deferred();

        $.ajax({
          method: 'POST',
          url: '/node/news_list',
          data: {type: type},
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
          url: '/node/news',
          data: {id: id},
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

      fetchMock: function (cat) {
        var deferred = new $.Deferred();
        var mockData = [ // for cat = all
          {
            id: '001',
            type: 'news',
            catalog: 'cars',
            headlineText: 'HEADLINE 1 (Text length 143)',
            date: '03/08/2016',
            img: '/assets/images/news/1.jpg',
            briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are.',
          },
          {
            id: '002',
            type: 'news',
            catalog: 'residences',
            headlineText: 'HEADLINE 2  (Text length 100)',
            date: '02/08/2016',
            img: '/assets/images/news/2.jpg',
            briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are get',
          },
          {
            id: '003',
            type: 'news',
            catalog: 'insurance',
            headlineText: 'HEADLINE 3 (Text length 160)',
            date: '01/08/2016',
            img: '/assets/images/news/3.jpg',
            briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past dec',
          },
          {
            id: '004',
            type: 'news',
            catalog: 'cars',
            headlineText: 'HEADLINE 4 (Text length 37)',
            date: '30/07/2016',
            img: '/assets/images/news/4.jpg',
            briefText: 'Alleged deceptive advertising at Jos.',
          },
          {
            id: '005',
            type: 'news',
            catalog: 'banks',
            headlineText: 'HEADLINE 5 (Text length should < 160)',
            date: '29/07/2016',
            img: '/assets/images/news/5.jpg',
            briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past dec',
          },
        ];
        _.delay(function () {
          deferred.resolve(mockData);
        }, 500);
        return deferred.promise();
      },
    };
  },
]);
