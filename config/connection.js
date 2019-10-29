//connect to mysql with root password in keys.js
var keys = require('../keys.js');
var mysql = require('mysql');
var connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database:"burger_db",
    user:"root",
    password: keys.pass.dbpass
})
connect.connect(function(err){
    if (err) throw err;
    console.log("Connected to mySql!!")
});
module.exports = connect;