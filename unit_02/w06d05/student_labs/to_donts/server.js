//packages
var path = require('path');
var logger = require('morgan');
var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//app settings
var app = express();
//controller
var todontsController = require("./controllers/to_donts.js");

//log
app.use(logger('dev'));

//views
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

// /after everything is set up then use methodOverride
app.use(methodOverride('_method'));
app.use('/todonts', todontsController);

//start server
app.listen(3000);
