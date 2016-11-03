'use strict';

var bodyParser = require('body-parser');
var compression = require('compression');
var express = require('express');
var http = require('http');
var methodOverride = require('method-override');
var multer = require('multer');
var serviceCtrl = require('./server/service.js');

var storage_user = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    var originalname = file.originalname;
    var extension = originalname.split('.');
    var filename = req.body.user + Date.now() + '.' + extension[extension.length - 1];
    cb(null, filename);
  }
});

var storage_admin = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/admin/');
  },
  filename: function (req, file, cb) {
    var originalname = file.originalname;
    var filename = originalname;
    cb(null, filename);
  }
});

var app = express();
var server = http.createServer(app, { 'log level': 0, 'match origin protocol': 'yes' });
var path = __dirname;
var rootUrl = '';

app.use(compression());
app.use(rootUrl, express.static(path));
app.use(rootUrl + '/web', express.static(path));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(require('prerender-node').set('prerenderToken', '2WCRutJAdOGa72kpzvFp'));

app.set('port', 80);

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) {
  res.redirect(rootUrl + req.originalUrl.replace(/^\//, ''));
});

app.get(rootUrl, function (req, res) {
  res.sendFile(path + '/index.html');
});

// handle services
app.post('/node/upload/:serviceName', multer({ storage: storage_user }).single('file'), serviceCtrl.upload);
app.post('/node/upload/admin/:serviceName', multer({ storage: storage_admin }).single('file'), serviceCtrl.upload);
app.post('/node/:serviceName', serviceCtrl.post);
app.get('/node/:serviceName', serviceCtrl.get);
app.post(rootUrl + '/node/:serviceName', serviceCtrl.post);
app.get(rootUrl + '/node/:serviceName', serviceCtrl.get);

app.all('/*', function (req, res) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', { root: path });
});
