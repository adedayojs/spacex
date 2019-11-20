const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const User = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  balance: { type: Number, required: true }
});
module.exports = mongoose.model('User', User);
