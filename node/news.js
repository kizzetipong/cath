'use strict';

var mysql = require('mysql');
var md5 = require('md5');

function NewsService() {
}

NewsService.prototype.init = function () {
};

NewsService.prototype.service = function (context, payload, serviceCallback) {
  var method = context.request ? context.request.method : 'GET';
  var retAry = [];
  var connection;
  var tokens = {
    1: 'ec3a2aeb99eee89affff1a02cd3a125e',
  };
  if (!payload || !payload.id) {
    serviceCallback('ERROR Msg', null);
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      // user: 'root',
      // password: 'tmtrobot',
      user: 'classaction',
      password: 'pwd123',
      database: 'class_action',
    });

    connection.connect();

    if (method === 'GET') {
      connection.query('SELECT * from news where id= ?', [payload.id], function (err, rows, fields) {
        if (!err) {
          rows.forEach(function (r) {
            retAry.push(
              {
                id: r.id,
                type: r.type,
                headlineText: r.headline,
                detail: r.detail,
                date: r.expired_at,
                img: r.head_img,
                briefText: r.brief_text,
                content_img: r.content_img,
                author_id: r.author_id,
              }
            );
          });
          serviceCallback(null, retAry);
        } else {
          console.log('Error while performing Query', err);
        }
      });
    } else if (method === 'POST') {
      if (payload.author_id && payload.token && tokens[payload.author_id] && tokens[payload.author_id] === md5(payload.token)) {
        connection.query('UPDATE news SET headline = ?, head_img = ?, brief_text = ?, detail = ?, author_id = ? where id= ?',
          [payload.headlineText, payload.img, payload.briefText, payload.detail, payload.author_id, payload.id], function (err, result) {
            if (err) {
              serviceCallback(err, null);
            } else {
              serviceCallback(null, { status: 200, message: 'changed ' + result.changedRows + ' rows' });
            }
          }
        );
      } else {
        serviceCallback({ message: 'ERROR: token not valid' }, null);
      }
    }

    connection.end();
  }
};

module.exports = NewsService;
