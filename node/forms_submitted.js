'use strict';

var mysql = require('mysql');

function FormSubmittedService() {
}

FormSubmittedService.prototype.init = function () {
};

FormSubmittedService.prototype.service = function (context, payload, serviceCallback) {
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
      // connection.query('SELECT * from forms_submitted where form= ?', [payload.formId], function (err, rows, fields) {
      //   if (!err) {
      //     rows.forEach(function (r) {
      //       retAry.push(r);
      //     });
      //     serviceCallback(null, retAry);
      //   } else {
      //     console.log('Error while performing Query', err);
      //   }
      // });
    } else if (method === 'POST') {
      console.log(payload);
      // TODO: should re-validate value
      connection.query('INSERT INTO forms_submitted SET ?',
        payload, function (err, result) {
          if (err) {
            serviceCallback(err, null);
          } else {
            serviceCallback(null, { status: 200, message: 'insert id = ' + result.insertId });
          }
        }
      );
    }

    connection.end();
  }
};

module.exports = FormSubmittedService;
