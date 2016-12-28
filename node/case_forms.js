'use strict';

var mysql = require('mysql');

function CaseFormsService() {
}

CaseFormsService.prototype.init = function () {
};

CaseFormsService.prototype.service = function (context, payload, serviceCallback) {
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

    var sql = 'SELECT template FROM case_forms WHERE id = ' + payload.id;

    connection.connect();
    connection.query(sql, function (err, rows, fields) {
      if (!err) {
        rows.forEach(function (r) {
          retAry.push(r);
        });
        serviceCallback(null, retAry);
      } else {
        console.log('Error while performing Query', err);
      }
    });

    connection.end();
  }
};

module.exports = CaseFormsService;
