'use strict';

var _ = require('lodash');
var mockData;
var retAry = [];

function MyNodeService() {
}

MyNodeService.prototype.init = function () {
};

MyNodeService.prototype.service = function (context, payload, serviceCallback) {
  if (!payload || !payload.catalog) {
    serviceCallback('ERROR Msg', null);
  } else {
    mockData = {
      news: [
        {
          newsId: '001',
          type: 'news',
          headlineText: 'HEADLINE 1',
          date: '03/08/2016',
          img: '/assets/images/news/1.jpg',
          briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past decade, Jos. A. Bank has faced allegations of false pricing by',
        },
        {
          newsId: '002',
          type: 'news',
          headlineText: 'HEADLINE 2',
          date: '02/08/2016',
          img: '/assets/images/news/2.jpg',
          briefText: 'Alleged deceptive advertising at Jos.',
        },
        {
          newsId: '003',
          type: 'news',
          headlineText: 'HEADLINE 3',
          date: '01/08/2016',
          img: '/assets/images/news/3.jpg',
          briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are.',
        },
        {
          newsId: '004',
          type: 'news',
          headlineText: 'HEADLINE 4',
          date: '30/07/2016',
          img: '/assets/images/news/4.jpg',
          briefText: 'Alleged deceptive advertising at Jos. A. Bank men’s clothing stores convinces consumers they are getting a better bargain than they really are. For the past decade, Jos. A. Bank has faced allegations of false pricing by',
        },
        {
          newsId: '005',
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
          headlineText: 'California Force-Placed Insurance',
          date: '03/08/2016',
          img: '/assets/images/investigations/1.jpg',
          briefText: 'California Force-Placed Insurance Class Action Lawsuit Investigation',
          moreText: 'Who’s Affected Were you hit with force-placed insurance in California? A class action lawsuit investigation has been launched into what appears to be an industry-wide practice of banks and lenders overcharging homeowners for “force-placed…',
        },
        {
          caseId: '002',
          stage: 'investigations',
          headlineText: 'Abilify Lawsuit',
          date: '01/08/2016',
          img: '/assets/images/investigations/2.jpg',
          briefText: 'Gambling Addiction, Shopping Addiction & Compulsive Behavior',
          moreText: 'Who’s Affected Did you or a loved one have a gambling addiction or shopping addiction after taking Abilify? Researchers have linked the antipsychotic drug Abilify (aripiprazole) to a number of compulsive behaviors including pathological…',
        },
        {
          caseId: '003',
          stage: 'settlements',
          headlineText: 'Settlements 3',
          date: '03/08/2016',
          img: '/assets/images/settlements/1.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
          moreText: 'Who’s Affected Did you or a loved one have a gambling addiction or shopping addiction after taking Abilify? Researchers have linked the antipsychotic drug Abilify (aripiprazole) to a number of compulsive behaviors including pathological…',
        },
        {
          caseId: '004',
          stage: 'investigations',
          headlineText: 'Delivery Driver',
          date: '03/08/2016',
          img: '/assets/images/investigations/3.jpg',
          briefText: 'Misclassified Employee Class Action Lawsuit Investigation',
          moreText: 'Who’s Affected Do you work for a courier service or delivery company to provide delivery services for Amazon, Google or FedEx? Delivery drivers who have worked as independent contractors for courier services while making…',
        },
        {
          caseId: '005',
          stage: 'settlements',
          headlineText: 'Settlements 3',
          date: '03/08/2016',
          img: '/assets/images/settlements/2.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
          moreText: 'Who’s Affected Do you work for a courier service or delivery company to provide delivery services for Amazon, Google or FedEx? Delivery drivers who have worked as independent contractors for courier services while making…',
        },
        {
          caseId: '006',
          stage: 'investigations',
          headlineText: 'Investigations 4',
          date: '03/08/2016',
          img: '/assets/images/investigations/4.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
          moreText: 'Who’s Affected Do you work for a courier service or delivery company to provide delivery services for Amazon, Google or FedEx? Delivery drivers who have worked as independent contractors for courier services while making…',
        },
        {
          caseId: '007',
          stage: 'investigations',
          headlineText: 'Investigations 5',
          date: '03/08/2016',
          img: '/assets/images/investigations/5.jpg',
          briefText: 'A settlement has been reached between BMW of North America and the Class of consumers',
          moreText: 'Who’s Affected Do you work for a courier service or delivery company to provide delivery services for Amazon, Google or FedEx? Delivery drivers who have worked as independent contractors for courier services while making…',
        },
      ],
    };  // TODO: should retrieve data from real database
    retAry = mockData[payload.catalog] || [];
    serviceCallback(null, retAry);
  }
};

module.exports = MyNodeService;
