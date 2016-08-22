'use strict';

angular.module('cath')
.service('newscatalogService', ['AppConfig',
  function ($appConfig) {
    var data;
    this.url = $appConfig.DB_URL;
    return {
      fetchData: function (cat) {
        var deferred = new $.Deferred();
        var mockData = [ // for cat = all
        {
          classId: '001',
          type: 'news',
          catalog: 'cars',
          headlineText: 'HEADLINE 1',
          date: '03/08/2016',
          img: '/assets/images/news/1.jpg',
          briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past decade, Jos. A. Bank has faced allegations of false pricing by',
        },
        {
          classId: '002',
          type: 'news',
          catalog: 'residences',
          headlineText: 'HEADLINE 2',
          date: '02/08/2016',
          img: '/assets/images/news/2.jpg',
          briefText: 'Alleged deceptive advertising at Jos.',
        },
        {
          classId: '003',
          type: 'news',
          catalog: 'insurance',
          headlineText: 'HEADLINE 3',
          date: '01/08/2016',
          img: '/assets/images/news/3.jpg',
          briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are.',
        },
        {
          classId: '004',
          type: 'news',
          catalog: 'cars',
          headlineText: 'HEADLINE 4',
          date: '30/07/2016',
          img: '/assets/images/news/4.jpg',
          briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past decade, Jos. A. Bank has faced allegations of false pricing by',
        },
        {
          classId: '005',
          type: 'news',
          catalog: 'banks',
          headlineText: 'HEADLINE 5',
          date: '29/07/2016',
          img: '/assets/images/news/5.jpg',
          briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past decade, Jos. A. Bank has faced allegations of false pricing by',
        },
        ];
        _.delay(function () { //TODO: should call real nodejs service
          deferred.resolve(mockData);
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
    };
  },
]);
