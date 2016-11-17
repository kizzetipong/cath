'use strict';

var mysql = require('mysql');

function NewsService() {
}

NewsService.prototype.init = function () {
};

NewsService.prototype.service = function (context, payload, serviceCallback) {
  var method = context.request ? context.request.method : 'GET';
  var retAry = [];
  var connection;
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
              }
              );
          });
          serviceCallback(null, retAry);
        } else {
          console.log('Error while performing Query', err);
        }
      });
    } else if (method === 'POST') {
      connection.query('UPDATE news SET headline = ?, head_img = ?, brief_text = ?, detail = ? where id= ?',
        [payload.headlineText, payload.img, payload.briefText, payload.detail, payload.id], function (err, result) {
          if (err) {
            serviceCallback(err, null);
          }
          else {
            serviceCallback(null, { status: 200, message: 'changed ' + result.changedRows + ' rows' });
          }
      });
    }

    connection.end();
  }
};

module.exports = NewsService;
