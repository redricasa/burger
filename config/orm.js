var connect = require("./connection.js")

//create an object that encompasses all the three methods below:
var orm= {
    // create method to select all - selectAll()
    all: function(tableName, toModels){
        //mysql query to get the whole table burger_db.burgers
        connect.query('SELECT * FROM ' + tableName + ';' , function(err, result){
            if (err) throw err;
            //takes the result of the query and exports it to the models burger.js
            toModels(result);
        })
    },
    insert: function(tableName, toModels){
        // create method to insert a row
        connect.query('SELECT * FROM ' + tableName + ';' , function(err, result){
            if (err) throw err;
            //takes the result of the query and exports it to the models burger.js
            toModels(result);
        })
    },
    update: function(tableName, condition, toModels){
        console.log(tableName, condition, toModels)
        // create method to update a row 
        connect.query('UPDATE ' + tableName + ' SET devoured=true WHERE id='+ condition+ ';' , function(err, result){
            if (err) throw err;
            //takes the result of the query and exports it to the models burger.js
            toModels(result);
        })
    }
    //terminate connection to mysql?
    // connection.end(function(err) {
    //     console.log("The connection is terminated now")
    // });
};
module.exports=orm;