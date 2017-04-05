var mongoose = require('mongoose');
var Criminal = require('../models/Criminal.js');

mongoose.Promise = global.Promise;

var db = mongoose.connect('mongodb://localhost:27017/infamous-masterminds');

var criminals = [
  {name: 'Ted Bundy', location: 'Starke, Flordia', status: 'Dead'},
  {name: 'Al Capone', location: 'Chicago, Illinois', status: 'Dead'},
  {name: 'Charles Manson', location: ' Cincinnati, Ohio', status: 'Dead'},
]

Criminal.remove({})
  .then(function(){
    return Criminal.create(criminals);
  })
  .then(function(criminals){
    console.log(criminals);
  })
  .then(function(){
    mongoose.connection.close(function () {
      console.log('Mongoose connection disconnected');
    });
  });
