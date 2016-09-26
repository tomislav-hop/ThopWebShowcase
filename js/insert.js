/**
 * Created by Tomislav on 26.9.2016..
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ordersDatabase'
});

connection.connect();

var status = {
    name: 'Node JS TEST',
    desc: 'NODE JS TEST'
};

var query = connection.query('insert into status set ?', status, function (err, result) {
    console.log(query.sql);
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(result);
    }
});