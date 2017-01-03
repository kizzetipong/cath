'use strict';

var mysql = require('mysql');
var _ = require('lodash');

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
      connection.query('SELECT * from forms_submitted where form= ?', [payload.formId], function (err, rows, fields) {
        if (!err) {
          rows.forEach(function (r) {
            retAry.push(r);
          });
          // serviceCallback(null, retAry);

          // process data - START
          var delim = '`';
          var enter = '~';
          var ret = _(retAry)
            .map(function (item) {
              return JSON.parse(item.data);
            })
            .filter(function (item) { return !_.isEmpty(item); })
            .value();

          var strAry = [];
          _.forEach(ret, function (i) {
            strAry.push((i.email || '') + delim + (i.first_name || '') + delim + (i.last_name || '') + delim + (i.mobile || '') + delim + (i.true_id || '') + delim + (i.true_package || '') + delim + (i.claim || ''));
          });

          var csvStr = strAry.join(enter);
          serviceCallback(null, csvStr);
          // process data - END
        } else {
          console.log('Error while performing Query', err);
        }
      });
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
