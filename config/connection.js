//connect to mysql with root password in keys.js
var keys = require('../keys');
var mysql = require('mysql');
//add jawsdb as a connection- added the JAWSDB_URL in .env
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
var connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database:"burger_db",
    user:"root",
    password: keys.pass.dbpass
})
};

connect.connect(function(err){
    if (err) throw err;
    console.log("Connected to mySql!!")
});
module.exports = connect;