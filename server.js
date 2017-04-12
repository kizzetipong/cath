'use strict';

var bodyParser = require('body-parser');
var compression = require('compression');
var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
};
var methodOverride = require('method-override');
var multer = require('multer');
var serviceCtrl = require('./server/service.js');

var storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    var originalname = file.originalname;
    var extension = originalname.split('.');
    var filename = req.body.user + Date.now() + '.' + extension[extension.length - 1];
    cb(null, filename);
  },
});

var storageAdmin = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/admin/');
  },
  filename: function (req, file, cb) {
    var originalname = file.originalname;
    var filename = originalname;
    cb(null, filename);
  },
});

var app = express();
var server = http.createServer(app, { 'log level': 0, 'match origin protocol': 'yes' });
var httpsserver = https.createServer(httpsOptions, app, { 'log level': 0, 'match origin protocol': 'yes' });
var path = __dirname + '/app';
var rootUrl = '';

app.use(compression());
app.use(rootUrl + '/bower_components', express.static('./bower_components'));
app.use(rootUrl + '/uploads', express.static('./uploads'));
app.use(rootUrl, express.static(path));
app.use(rootUrl + '/web', express.static(path));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000/').set('prerenderToken', '2WCRutJAdOGa72kpzvFp'));

app.use('/reportss', express.static(__dirname + '/test/reports'));
app.use('/reports', function (req, res) {
  res.status(404).end();
});

app.set('port', 9999);

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});

httpsserver.listen(443, function () {
  console.log('The Express https server is listening on port 443.');
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
app.post('/node/upload/:serviceName', multer({ storage: storageUser }).single('file'), serviceCtrl.upload);
app.post('/node/upload/admin/:serviceName', multer({ storage: storageAdmin }).single('file'), serviceCtrl.upload);
app.post('/node/:serviceName', serviceCtrl.post);
app.get('/node/:serviceName', serviceCtrl.get);
app.post(rootUrl + '/node/:serviceName', serviceCtrl.post);
app.get(rootUrl + '/node/:serviceName', serviceCtrl.get);

app.all('/*', function (req, res) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('index.html', { root: path });
});
