var mongoose = require('mongoose');
var UserRoleSchema = new mongoose.Schema({
  role_name: { type: String, required: true, unique: true}
});
mongoose.model('UserRole',UserRoleSchema);