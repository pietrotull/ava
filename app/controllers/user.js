var express = require('express'),
  router = express.Router(),
  tokenService = require('./../filter/token'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

router.use(tokenService.ensureAuthorized);
module.exports = function (app) {
  app.use('/api/users', router);
};

router.post('/',function (req, res) {
  var user = new User(req.body);
  user.save(function (err) {
    if (err) {
      console.error('failed to save user');
      res.status(500, 'failed to save user');
    } else {
      res.json(user);
    }
  });
});

router.post('/:userId', function (req, res) {
  var userId = req.params.userId;
  var update = req.body;
  User.update({userId : userId},
    {email: update.email, status: update.status, availability: update.availability}, {},
    function (err, updated) {
      if (err) {
        console.error('failed to find user ' + userId);
        res.status(500, 'failed to find user  ' + userId);
      } else {
        res.json(updated);
      }
  });
});

router.get('/:userId', function (req, res) {
  var userId = req.params.userId;
  User.findOne({userId : userId}, function (err, user) {
    if (err) {
      console.error('failed to find user ' + userId);
      res.status(500, 'failed to find user  ' + userId);
    } else {
      res.json(user);
    }
  });
});

router.get('/', function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.error('failed to query users');
      res.status(500, 'failed to query users');
    } else {
      res.json(users);
    }
  });
});
