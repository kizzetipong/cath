
    var mysql      = require('mysql');
    var connection = mysql.createConnection({
      host     : '127.0.0.1',
      port     : 3306,
      user     : 'classaction',
      password : 'pwd123',
      database : 'class_action'
    });

    connection.connect();

    connection.query('SELECT * from cases', function(err, rows, fields) {
      if (!err) {
        rows.forEach(function(r){
          console.log(r.id);
        });
      } else {
        console.log('Error while performing Query', err);
      }
    });

    connection.end();

    