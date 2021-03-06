//import all the npm modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
//initialize express
var app = express();
//create a static page server connection to the route /public
app.use(express.static(__dirname + '/public'));
// to insure express has access to public folder with style and images
// app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(methodOverride('_method'));
//sets handlebars as the express engine and set the default layout to main.handlebars
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
//set default engine, and provide handlebars as extension
app.set('view engine', 'handlebars');
//link to the controllers by importing the routes and get the homepage "/"
var routes = require('./controllers/burgers_controller.js');
app.use("/", routes);
//the port would connect either through local port 3000 or thru heroku 
// var PORT = 3000 || process.env.JAWSDB_URL;
// app.listen(PORT, function(){
//     console.log("connected thru port :" + PORT);
// });
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });