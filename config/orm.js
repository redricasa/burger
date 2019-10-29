var connect = require("./connection.js")

//create an object that encompasses all the three methods below:
var orm= {
    // create method to select all - selectAll()
    all: function(tableName, toModels){
        //mysql query to get the whole table burger_db.burgers
        connect.query('SELECT * FROM' + tableName + ';' , function(err, result){
            if (err) throw err;
            //takes the result of the query and exports it to the models burger.js
            toModels(result);
        })
    }

    // create method to insert a row - insertOne()
    // TO DO

    // create method to update a row - updateOne()
    //TO DO
};
module.exports=orm;