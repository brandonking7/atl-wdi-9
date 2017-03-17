/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
// include the method-override package
var methodOverride = require('method-override');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/

var bodyParser = require('body-parser');



// use methodOverride.  We will be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

//controllers
// var todosController = require('./controllers/todos.js');
// app.use('/todos', todosController);
/* INDEX TODOS */

// log
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');
app.use(express.static(_dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});


// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
