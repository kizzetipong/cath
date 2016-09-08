'use strict';

var bodyParser = require('body-parser');
var compression = require('compression');
var express = require('express');
var http = require('http');
var methodOverride = require('method-override');
var serviceCtrl = require('./server/service.js');

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
app.post('/service/:serviceName', serviceCtrl.post);
app.get('/service/:serviceName', serviceCtrl.get);
app.post(rootUrl + '/service/:serviceName', serviceCtrl.post);
app.get(rootUrl + '/service/:serviceName', serviceCtrl.get);

app.all('/*', function (req, res) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', { root: path });
});
