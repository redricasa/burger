//import orm.js file
var orm = require('../config/orm.js')

var burger = {
    all: function(fromORMtoRoutes){
        orm.all('burgers', function(response){
            fromORMtoRoutes(response)
        })
    },
    update: function(id, fromORMtoRoutes){
        orm.update('burgers', id, fromORMtoRoutes)
    },
}
module.exports = burger