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
    //update the boolean value of devoured column
    update: function(tableName, condition, toModels){
        console.log(tableName, condition, toModels)
        connect.query('UPDATE ' + tableName + ' SET devoured=true WHERE id='+ condition+ ';' , function(err, result){
            if (err) throw err;
            //takes the result of the query and exports it to the models burger.js
            toModels(result);
        })
    },
    //to insert into burgers table from client entry
    create: function(tableName, val, toModels){
        console.log(tableName, val, toModels)
        connect.query('INSERT INTO ' + tableName + " (burger_name) VALUES ('"+ val +"');", function(err, result){
            if (err) throw err;
            //takes the result of the query and exports it to the models burger.js
            toModels(result);
        })
    }
};
module.exports=orm;