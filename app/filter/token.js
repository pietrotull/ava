//var _ = require('lodash');
// var jwt = require('jsonwebtoken');
var mongoose = require('mongoose'),
  Agency = mongoose.model('Agency');

exports.ensureAuthorized = function(req,res,next) {
  var token = req.header('x-access-token');
  Agency.findOne({token:token}, function (err, agency) {
    if (agency && !err) {
      next();
    } else {
      res.send(401);
    }
  });
};
