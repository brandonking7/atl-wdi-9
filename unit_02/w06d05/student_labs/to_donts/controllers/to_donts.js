var express = require('express');
var router = express.Router();
var data = require('../models/data.js');

router.get('/', function (req,res) {
res.render('index', {
  item: data.seededToDonts
  });
});

router.post('/', function(req, res) {
  var newToDont = {
    decription: req.body.decription,
    urgent: req.body.urgent
  };
  data.seededToDonts.push(newToDont);
  res.redirect('/to_donts');
});

router.get('/:id', function(req, res) {
  res.render('show', {
    item: data.seededToDonts[req.params.id]
  });
});


module.exports = router;
