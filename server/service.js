'use strict';

// handle services
var context = require('./context.js');

var postHandle = function (req, res) {
  if (req.params.serviceName !== null && req.params.serviceName !== '') {
    var Service = require('../node/' + req.params.serviceName + '.js');
    var serviceInstance = new Service();
    serviceInstance.service(new context(req), req.body, function (err, response, option) {
      if (option && option.headers) {
        if (option.headers['Content-Type'] !== null && option.headers['Content-Type'] !== undefined) {
          res.setHeader('Content-Type', option.headers['Content-Type']);
        }
        if (option.headers['Content-Disposition'] !== null && option.headers['Content-Disposition'] !== undefined) {
          res.setHeader('Content-Disposition', option.headers['Content-Disposition']);
        }
      }
      if (!err) {
        res.send(response);
      } else {
        res.status(403).send(err.message);
      }
    });
  }
};

var getHandle =  function (req, res) {
  
  if (req.params.serviceName !== null && req.params.serviceName !== '') {
    var Service = require('../node/' + req.params.serviceName + '.js');
    var serviceInstance = new Service();
    serviceInstance.service(new context(req), req.query, function (err, response, option) {
      if (!err) {
        if (option && option.headers) {
          if (option.headers['Content-Type'] !== null && option.headers['Content-Type'] !== undefined) {
            res.setHeader('Content-Type', option.headers['Content-Type']);
          }
          if (option.headers['Content-Disposition'] !== null && option.headers['Content-Disposition'] !== undefined) {
            res.setHeader('Content-Disposition', option.headers['Content-Disposition']);
          }
        }
        res.send(response);
      } else {
        res.status(404).send(err.message);
      }
    });
  }
};

var shareHandle = function (req, res) {
  if (req.params.serviceName !== null && req.params.serviceName !== '') {
    var Service = require('/Apps/shared-services/service/' + req.params.serviceName + '/' + req.params.method);
    var serviceInstance = new Service();
    serviceInstance.service(new context(req), req.query, function (err, response, option) {
      if (!err) {
        res.send(response);
      }
    });
  }
};

module.exports.post = postHandle;
module.exports.get = getHandle;
module.exports.share = shareHandle;
