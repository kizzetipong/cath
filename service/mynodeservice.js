'use strict';

var _ = require('lodash');

function MyNodeService() {
}

MyNodeService.prototype.init = function () {
};

MyNodeService.prototype.service = function (context, payload, serviceCallback) {
  if (!payload || !payload.catalog) {
    serviceCallback('ERROR Msg', null);
  }
  else {
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
      cases: [
        {
          caseId: '001',
          stage: 'investigations',
          headlineText: 'Investigations 1',
          date: '03/08/2016',
          img: '/assets/images/investigations/1.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
        },
        {
          caseId: '002',
          stage: 'investigations',
          headlineText: 'Investigations 2',
          date: '01/08/2016',
          img: '/assets/images/investigations/2.jpg',
          briefText: 'A settlement has been reached between BMW',
        },
        {
          caseId: '003',
          stage: 'settlements',
          headlineText: 'Settlements 1',
          date: '03/08/2016',
          img: '/assets/images/settlements/1.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
        },
        {
          caseId: '004',
          stage: 'investigations',
          headlineText: 'Investigations 3',
          date: '03/08/2016',
          img: '/assets/images/investigations/3.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
        },
        {
          caseId: '005',
          stage: 'settlements',
          headlineText: 'Settlements 2',
          date: '03/08/2016',
          img: '/assets/images/settlements/2.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
        },
        {
          caseId: '006',
          stage: 'investigations',
          headlineText: 'Investigations 4',
          date: '03/08/2016',
          img: '/assets/images/investigations/4.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
        },
        {
          caseId: '007',
          stage: 'investigations',
          headlineText: 'Investigations 5',
          date: '03/08/2016',
          img: '/assets/images/investigations/5.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
        },
      ],
    };  //TODO: should retrieve data from real database
    var retAry = mockData[payload.catalog] || [];
    serviceCallback(null, retAry);
  }
};

module.exports = MyNodeService;
