'use strict';

var mysql = require('mysql');

function SubmittedCountService() {
}

SubmittedCountService.prototype.init = function () {
};

SubmittedCountService.prototype.service = function (context, payload, serviceCallback) {
  var method = context.request ? context.request.method : 'GET';
  var retAry = [];
  var connection;
  if (!payload) {
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
      if (payload.mode === 'form') {
        var qStr = 'select count(id) as count from forms_submitted';
        qStr = payload.caseId ? (qStr + ' where form = (select form from case_forms where id= ?)') : qStr;
        connection.query(qStr, [payload.caseId], function (err, rows, fields) {
          if (!err) {
            rows.forEach(function (r) {
              retAry.push(r);
            });
            serviceCallback(null, retAry);
          } else {
            console.log('Error while performing Query', err);
          }
        });
      }
      else if (payload.mode === 'complaints') {
        connection.query('select count(id) as count from complaints', function (err, rows, fields) {
          if (!err) {
            rows.forEach(function (r) {
              retAry.push(r);
            });
            serviceCallback(null, retAry);
          } else {
            console.log('Error while performing Query', err);
          }
        });
      }
    }

    connection.end();
  }
};

module.exports = SubmittedCountService;
