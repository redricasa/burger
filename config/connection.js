//connect to mysql with root password in keys.js
require("dotenv").config();
var dbpass = process.env.DBPASS;
var mysql = require('mysql');

var connection ;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
    console.log("connected to Heroku's Jawsdb!")
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: dbpass,
        database: "burger_db"
    });
    console.log("connected to local mysql workbench!")
};
module.exports = connection;