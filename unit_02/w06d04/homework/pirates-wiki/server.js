/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var methodOverride = require('method-override');
var app         = express();
var port        = process.env.PORT || 3000;
var bodyParser = require('body-parser');



// use methodOverride.  We will be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

//controllers
var piratesController = require('./controllers/pirates.js');
app.use("/pirates", piratesController);

// log
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');
// app.use(express.static(_dirname + '/public'));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});


// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
