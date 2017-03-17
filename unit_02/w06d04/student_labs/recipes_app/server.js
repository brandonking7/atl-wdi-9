var express = require('express');
var app = express();
var hbs = require('hbs');

var data = require('./recipes.js');

app.set('view engine', 'hbs');

app.get('/recipes', function(req, res) {
  // res.send('This is it');
  res.render('recipes/index', {
    data: data.seededRecipes
  });

app.get('/new', function(req, res) {
  res.render('recipes/new.hbs');
});

app.get('/recipes/:id', (req, res) => {
  var recipe = data.seededRecipes[req.params.id];
  res.render('recipes/show', {
    data: recipe
  });
});

// app.post('/recipes', (req, res) => {
//     res.render('This is the post')
// });

  // res.send(data.seededRecipes);
});


app.listen(3000);
