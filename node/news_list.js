'use strict';

var _ = require('lodash');

function NewsListService() {
}

NewsListService.prototype.init = function () {
};

NewsListService.prototype.service = function (context, payload, serviceCallback) {

  if (!payload || !payload.type) {
    serviceCallback('ERROR Msg', null);
  }
  else {

    var retAry = [];
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      port     : 3306,
      user     : 'root',
      password : 'tmtrobot',
      database : 'class_action'
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
        submitted : [0, 200],
        investigations : [200, 400],
        settlements : [400, 1000],
    };
    var sql = 'SELECT * from news';

    if (payload.type in QMAP) {
        sql += ' where status>='+QMAP[payload.type][0]+' and status<'+QMAP[payload.type][1];
    }

    console.log(sql);
    console.log(connection);



    connection.connect();
    connection.query(sql, function(err, rows, fields) {
      if (!err) {
        rows.forEach(function(r){
            var brief_text = "";
            if (r.brief_text != null) {
              brief_text = r.brief_text.substring(0,100) + "...";
            }

            retAry.push(
                {
                  id: r.id,
                  status: r.status,
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
