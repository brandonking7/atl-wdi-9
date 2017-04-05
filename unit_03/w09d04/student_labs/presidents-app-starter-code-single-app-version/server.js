var express = require('express');
var path = require('path');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

//Connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/presidents-app');

<<<<<<< HEAD
=======
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);
>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef

//Set up engine stuff and middleware
//Defining what views to use
app.use(cors());
<<<<<<< HEAD
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
=======

>>>>>>> c1ba13c7fa4e87d2c0547a57d23dadaff121eeef
app.use(express.static('public'));

var presidentsController = require("./controllers/presidents.js");
app.use('/presidents', presidentsController);



app.listen(3000);
