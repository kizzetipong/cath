'use strict';

function UploadService() {
}

UploadService.prototype.init = function () {
};

UploadService.prototype.service = function (req, res, serviceCallback) {
  serviceCallback(null, req.file);
};

module.exports = UploadService;
