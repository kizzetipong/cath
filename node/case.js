'use strict';

var mysql = require('mysql');

function CaseService() {
}

CaseService.prototype.init = function () {
};

CaseService.prototype.service = function (context, payload, serviceCallback) {
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
      connection.query('SELECT * from cases where id=' + payload.id, function (err, rows, fields) {
        if (!err) {
          rows.forEach(function (r) {
            retAry.push(
              {
                id: r.id,
                stage: 'investigations',
                headlineText: r.headline,
                briefText: r.brief_text,
                teaser: r.teaser,
                detail: r.detail,
                formId: r.form_id,
                date: r.expired_at,
                img: r.head_img,
              }
              );
          });
          serviceCallback(null, retAry);
        } else {
          console.log('Error while performing Query', err);
        }
      });
    } else if (method === 'POST') {
      connection.query('UPDATE cases SET headline = ?, head_img = ?, brief_text = ?, detail = ? where id= ?',
        [payload.headlineText, payload.img, payload.briefText, payload.detail, payload.id], function (err, result) {
          if (err) {
            serviceCallback(err, null);
          } else {
            serviceCallback(null, { status: 200, message: 'changed ' + result.changedRows + ' rows' });
          }
        }
      );
    }

    connection.end();
  }
};

module.exports = CaseService;
