//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
var router = express.Router({mergeParams: true});

var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');


//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user
router.post('/', function(req,res) {
  User.findById(req.params.id)
    .exec(function(err, user) {
      if(err) {console.log(err);}

      const newList = {
        name: req.body.name
      }
      user.lists.push(newList)

      user.save(function(err) {
        if(err) console.log(err);
        console.log('List created')
      });
      res.redirect('/users')
    });
});

//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.id)
  .exec(function(err, user) {
    if(err) {console.log(err);}
    console.log(user);
    res.render('/lists/edit', {
      list: list,
      user: user
    });
  });
});


//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.
router.put('/:id', function updateList(req, res){
  User.findById(req.params.userId)
    .exec(function (err, user){
      if (err) { console.log(err); }
      const list = user.lists.id(req.params.id);

      list.name = req.body.name
      list.completed = req.body.completed
      user.save();

      res.render('lists/show', {
        list: list,
        user: user
      });
    });
});

//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item


//======================
// EXPORTS
//======================
module.exports = router;
