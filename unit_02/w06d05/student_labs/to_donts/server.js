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
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(logger('dev'));
app.use('/to_donts', todontsController);
app.use(methodOverride('_method'));
//views
app.set('view engine', 'hbs')
//start server
app.listen(3000);
