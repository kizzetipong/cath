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

  var mockData = {
    news: [
      {
        classId: '',
        headlineText: 'HEADLINE 1',
        date: '',
        img: '',
        briefText: '',
      },
      {
        classId: '',
        headlineText: 'HEADLINE 2',
        date: '',
        img: '',
        briefText: '',
      },
      {
        classId: '',
        headlineText: 'HEADLINE 3',
        date: '',
        img: '',
        briefText: '',
      },
      {
        classId: '',
        headlineText: 'HEADLINE 4',
        date: '',
        img: '',
        briefText: '',
      },
      {
        classId: '',
        headlineText: 'HEADLINE 5',
        date: '',
        img: '',
        briefText: '',
      },
    ],
    investigations: [
      {
        classId: '',
        headlineText: 'investigations 1',
        date: '',
        img: '',
        briefText: '',
      },
      {
        classId: '',
        headlineText: 'investigations 2',
        date: '',
        img: '',
        briefText: '',
      },
    ],
    settlements: [],
  };  //TODO: should retrieve data from real database
  var retAry = mockData[payload.catalog] || [];
  serviceCallback(null, retAry);
};

module.exports = MyNodeService;
