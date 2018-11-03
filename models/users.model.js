const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UsersSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true, max: 100},
    username: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Users', UsersSchema);