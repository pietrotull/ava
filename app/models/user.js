// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  userId: String,
  email: String,
  availability: Date,
  status: String,
  source: String
});

UserSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);

var AgencySchema = new Schema({
  agencyId: Number,
  name: String,
  token: String
});

mongoose.model('Agency', AgencySchema);
