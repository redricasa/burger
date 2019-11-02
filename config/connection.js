//connect to mysql with root password in keys.js
var dbpass =process.env.dbpass;
var mysql = require('mysql');
//add jawsdb as a connection- added the JAWSDB_URL in .env
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
} 
else {
var connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database:"burger_db",
    user:"root",
    password: dbpass
})
};

connect.connect(function(err){
    if (err) throw err;
    console.log("Connected to mySql!!")
});
module.exports = connect;