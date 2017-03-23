var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user.js');

function createSecure(req, res, next) {
  var password = req.body.password;

  res.hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  next();
}

function loginUser(req, res, next) {
  var email = req.body.email;
  var password = req.body.password;

  User.findOne({ email: email })
  .then(function(foundUser){
    if (foundUser == null) {
      res.json({status: 401, data: "unauthorized"});

    } else if (bcrypt.compareSync(password, foundUser.password_digest)) {
      req.session.currentUser = foundUser;
    }
    next();
  })
  .catch(function(err){
    res.json({status: 500, data: err});
  });
}

//create a function called "authorized" that checks if the CurrentUser's id matches the id in params
//your code here
function authorized(req, res, next) {
  var currentUser = req.session.currentUser
  if (!currentUser || currentUser._id !== req.params.id) {
    res.send({status: 404})
  } else {
    next()
  }
};

//Export this function below:

module.exports = {
  createSecure: createSecure,
  loginUser: loginUser,
  authorized: authorized
};
