var express = require('express');
var app = express();

app.set('views', process.argv[3])
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

var bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended: true}))

app.get('/home', function(req, res)  {
  res.send('HELLO WORLD!')
});

app.get('/form', function(req, res)  {
  res.send(req.body.str.split('').reverse().join(''))
});

app.get('/search', function(req, res)  {
  res.send(req.query)
});

app.post('/path', function(req, res)  {

});

app.get('/message/:id', function(req, res)  {
 var str = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');

});



app.listen(process.argv[2])
