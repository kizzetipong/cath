'use strict';

function MyNodeService() {
}

MyNodeService.prototype.init = function () {
};

MyNodeService.prototype.service = function (context, payload, serviceCallback) {
  serviceCallback(null, 'This is return from node service');
};

module.exports = MyNodeService;
