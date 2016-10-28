'use strict';

var bodyParser = require('body-parser');
var compression = require('compression');
var express = require('express');
var http = require('http');
var methodOverride = require('method-override');
var multer = require('multer');
var serviceCtrl = require('./server/service.js');

var storage = multer.diskStorage({
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


var app = express();
var server = http.createServer(app, { 'log level': 0, 'match origin protocol': 'yes' });
var path = __dirname + '/app';
var rootUrl = '';

app.use(compression());
app.use(rootUrl + '/bower_components', express.static('./bower_components'));
app.use(rootUrl, express.static(path));
app.use(rootUrl + '/web', express.static(path));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());


app.use('/reportss', express.static(__dirname + '/test/reports'));
app.use('/reports', function (req, res) {
  res.status(404).end();
});
/*
app.use('/service/cases', function (req, res, next) {
  console.log('Request Type:', req.method);
  res.status(200).end();
});
*/


app.set('port', 9999);

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

app.get(rootUrl + '/templates.js', function (req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.send('');
});

app.get('/', function (req, res) {
  res.redirect(rootUrl + req.originalUrl.replace(/^\//, ''));
});

app.get(rootUrl, function (req, res) {
  res.sendFile(path + '/index.html');
});

// handle services
app.post('/node/upload/:serviceName', multer({ storage: storage }).single('file'), serviceCtrl.upload);
app.post('/node/:serviceName', serviceCtrl.post);
app.get('/node/:serviceName', serviceCtrl.get);
app.post(rootUrl + '/node/:serviceName', serviceCtrl.post);
app.get(rootUrl + '/node/:serviceName', serviceCtrl.get);

app.all('/*', function (req, res) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', { root: path });
});
