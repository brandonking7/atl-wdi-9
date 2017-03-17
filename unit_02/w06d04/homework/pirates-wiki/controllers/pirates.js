//requirements
var express = require('express');
var router = express.Router();
var piratesArray = require("../models/pirates.js");

//all routes for /pirate

//Home
router.get('/', function(req, res) {
  res.render('index.hbs', {
    pirates: piratesArray
  })
});
//New route
router.get('/new', function(req,res) {
  res.render('pirates/new');
});

router.get('/:id', function(req, res) {
  res.render('pirates/show');
});

//  //creat pirate
// router.post('/', function(req, res) {

//   var newPirate = {
//     name: req.body.name,
//     birthplace: req.body.birthplace,
//     death_year: req.body.death_year,
//     base: req.body.base,
//     nickname: req.body.nickname
//   }
//   pirates.listOfPirates.push(newPirate);
//   res.redirect('/pirates');

// });

//Show pirates
router.get('/:id', function(req, res) {
  var pirate = pirates.historicPirates[req.params.id];
  res.render('pirates/show', {
    pirate: pirate
  });
});

//creat pirate
router.post('/', function(req, res) {

  var newPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  }
  pirates.historicPirates.push(newPirate);
  res.redirect('/pirates');

});
module.exports = router;
