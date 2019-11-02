//connect to mysql with root password in keys.js
var dbpass = process.env.dbpass;
var mysql = require('mysql');
// -----------------------------------------
//add jawsdb as a connection- added the JAWSDB_URL in .env
// var connection = mysql.createConnection(process.env.JAWSDB_URL);
//creating a function to place in the else statement
// var connect =  {
//     local:mysql.createConnection(
//         {
//             host: "localhost",
//             port: 3306,
//             database:"burger_db",
//             user:"root",
//             password: dbpass
//         }
//     )
// };
//connect to heroku's jawsdb database or mysql locally
// if (process.env.JAWSDB_URL) {
//     connection; 
// } 
// else {
//     connect ;
// };
// connect.connect(function(err){
//     if (err) throw err;
//     console.log("Connected to mySql!!")
// });
// module.exports = connect;
// ------------------------------------------
var connection;
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