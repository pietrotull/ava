//var _ = require('lodash');
// var jwt = require('jsonwebtoken');

exports.ensureAuthorized = function(req,res,next) {
  console.log('going through filter:', req.headers);
  var token = req.header('x-access-token');
  console.log('token:', token);
  if (token) {
    next();
  } else {
    res.send(401);
  }
};
