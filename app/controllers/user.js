var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/users', router);
};

router.post('/',function (req, res, next) {
  var user = new User(req.body);
  console.log('user:', user);
  user.save(function (err) {
    if (err) {
      console.error('failed to save user');
      res.status(500, 'failed to save user');
    } else {
      res.json(user);
    }
  });
});

router.get('/display', function (req, res, next) {
  User.find(function (err, users) {
     if (err) return next(err);
     res.render('user', {
     title: 'Ava user listing',
     users: users
     });
  });
});

router.get('/', function (req, res, next) {
  User.find(function (err, users) {
    console.log ('users:', users);
    if (err) {
      console.error('failed to query users');
      res.status(500, 'failed to query users');
    } else {
      res.json(users);
    }
  });
});
