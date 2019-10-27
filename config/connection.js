//connect to mysql with root password in keys.js
var keys = require('./keys.js')

var connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database:"bamazon_db",
    user:"root",
    password: keys.pass.dbpass
})
connect.connect(function(err){
    if (err) throw err;
    console.log("Connected to mySql!!")
});