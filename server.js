//import all the npm modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
//initialize express
var app = express();
//create a static page server connection to the route /public
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(methodOverride('_method'));
//sets handlebars as the express engine and set the default layout to main.handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
//link to the controllers by importing the routes and get the homepage "/"
var routes = require('./controllers/burgers_controller.js');
app.use("/", routes);

var PORT = 3000;
app.listen(PORT);
