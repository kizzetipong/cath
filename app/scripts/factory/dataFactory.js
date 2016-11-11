'use strict';

angular.module('cath').factory('dataFactory', ['$q',
  function ($q) {
    var dataModel = {
      user: {},
    };

    dataModel.setUser = function (data) {
      return _.set('user', data);
    };

    dataModel.getUser = function () {
      return _.get('user');
    };

    return dataModel;
  },
]);
