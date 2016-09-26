/**
 * Created by Tomislav on 26.9.2016..
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ordersDatabase',
    multipleStatements: true
});

connection.connect();

var id = '1';
var query = connection.query('select * from status where id_status = ?', id, function(err, result){
    console.log(query.sql);
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(result);
    }
});