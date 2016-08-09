var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var movieSchema = new Schema({
  email: String,
  password: String,
  username: String
});

module.exports = mongoose.model('User', movieSchema);
/* module.exports.getUserByUsername = function (username,callback){
var query = {username:username};
user.findOne(query,callback);

} */