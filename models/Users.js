var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  display_name: String,
  username: { type: String, required: true, unique: true},
  password: { type: String, select: false },
  email: { type: String, required: true, unique: true},
	phone: Number,
	register_date: Date,
	modified_date: Date,
	account_status: Boolean,
	role_id: [{type: mongoose.Schema.Types.ObjectId, ref: 'User_Role', required: true}]
});
mongoose.model('User',UserSchema);

