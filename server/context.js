'use strict';

var util = require('util');
var _ = require('lodash');
var appConfig = require('../app_config.json');

var Context = exports = module.exports = function (req, config) {
    this.config =  _.assign(
      {},
      appConfig.configurations,
      appConfig.datacenter_configurations.dev,
      {dataPath: '/app'}
    );
    if (req) {
      this.request = req;
    }
};

Context.prototype = {
  getCache: function () {
    return null;
  },
  callService: function (serviceName, method, input, callback) {
    var SharedService = require('../' + serviceName + '/' + method);
    var serviceInstance = new SharedService();
    serviceInstance.service(new Context(), input, function (err, response, option) {
      if (!err) {
        callback(null, JSON.parse(response));
      }
    });
  },

  getConfiguration: function (key) {
    return this.config[key];
  },

  getUUID: function () {
    return 'PAXTRA23447';
  },
};

exports.createContext = function (req, config) {
  return new Context(req, config);
};
