const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete')

//shape data 
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    city: String,
});


userSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const User = mongoose.model('user', userSchema);
module.exports = User;