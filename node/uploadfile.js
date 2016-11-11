'use strict';

var _ = require('lodash');

function UploadService() {
}

UploadService.prototype.init = function () {
};

UploadService.prototype.service = function (req, res, serviceCallback) {
  serviceCallback(null, _.extend(req.file, { filelink: req.file.path }));
};

module.exports = UploadService;
