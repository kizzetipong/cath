'use strict';

var mysql = require('mysql');

function NewsListService() {
}

NewsListService.prototype.init = function () {
};

NewsListService.prototype.service = function (context, payload, serviceCallback) {
  var retAry = [];
  var connection;
  if (!payload || !payload.type) {
    serviceCallback('ERROR Msg', null);
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      // user: 'root',
      // password: 'tmtrobot',
      user: 'classaction',
      password: 'pwd123',
      database: 'class_action',
    });


    var sql = 'SELECT * from news where status=1';

    connection.connect();
    connection.query(sql, function (err, rows, fields) {
      if (!err) {
        rows.forEach(function (r) {
          var brief_text = '';
          if (r.brief_text != null) {
            brief_text = r.brief_text.substring(0, 100) + '...';
          }

          retAry.push(
            {
              id: r.id,
              type: payload.type,
              headlineText: r.headline,
              briefText: brief_text,
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

module.exports = NewsListService;
