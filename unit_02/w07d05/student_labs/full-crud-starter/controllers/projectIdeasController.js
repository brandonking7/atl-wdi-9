var express = require('express');
var router = express.Router({mergeParams: true});

var User = require("../models/user");
var Item = require("../models/item");
var ProjectIdea = require('../models/project_idea');

router.get('/', function indexProjectIdea(req, res) {
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if(err) {console.log(err);}
      res.render('indexProjectIdea/show.hbs', {
        user: user
      });
    });
});
module.exports = router;
