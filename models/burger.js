//import orm.js file
var orm = require('../config/orm.js')

var burger = {
    all: function(fromORMtoRoutes){
        orm.all('burgers', function(response){
            fromORMtoRoutes(response)
        })
    }
}

module.exports = burger