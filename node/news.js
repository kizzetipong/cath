'use strict';

var _ = require('lodash');

function NewsService() {
}

NewsService.prototype.init = function () {
};

NewsService.prototype.service = function (context, payload, serviceCallback) {

  if (!payload || !payload.id) {
    serviceCallback('ERROR Msg', null);
  }
  else {

    var retAry = [];
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'tmtrobot',
      database : 'class_action'
    });


    connection.connect();
    connection.query('SELECT * from news where id='+payload.id, function(err, rows, fields) {
      if (!err) {
        rows.forEach(function(r){

            retAry.push(
                {
                  id: r.id,
                  stage: 'investigations',
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

    connection.end();
  }
};

module.exports = NewsService;
