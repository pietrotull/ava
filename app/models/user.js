// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  userId: String,
  email: String,
  availability: String,
  status: String
});

UserSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('User', UserSchema);

