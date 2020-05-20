//import orm.js file
var orm = require('../config/orm.js');

var burger = {
    all: function(fromORMtoRoutes){
        orm.all('burgers', function(response){
            fromORMtoRoutes(response);
        })
    },
    update: function(id, fromORMtoRoutes){
        // console.log(id, fromORMtoRoutes);
        orm.update('burgers', id, fromORMtoRoutes);
    },
    create: function(name, fromORMtoRoutes){
        orm.create('burgers', name, fromORMtoRoutes)
    },
    delete: function(){
        orm.delete('burgers', name, fromORMtoRoutes)
    }
}
module.exports = burger;