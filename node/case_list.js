'use strict';

var mysql = require('mysql');

function CaseListService() {
}

CaseListService.prototype.init = function () {
};

CaseListService.prototype.service = function (context, payload, serviceCallback) {
  var retAry = [];
  var connection;
  if (!payload || !payload.type) {
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

/*
    status:
        0   : submitted
        100 : verifying
        200 : opened
        300 : in_process
        400 : closed
*/

    var QMAP = {
      submitted: [0, 200],
      investigations: [200, 400],
      settlements: [400, 1000],
    };
    var sql = 'SELECT * from cases';

    if (payload.type in QMAP) {
      sql += ' where status>=' + QMAP[payload.type][0] + ' and status<' + QMAP[payload.type][1];
    }

    connection.connect();
    connection.query(sql, function (err, rows, fields) {
      if (!err) {
        rows.forEach(function (r) {
          retAry.push(
            {
              id: r.id,
              status: r.status,
              code: r.code,
              type: payload.type,
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

    connection.end();
  }
};

module.exports = CaseListService;
