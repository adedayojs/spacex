const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const Station = new Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true, enum: ['NATURAL', 'MAN-MADE'] },
  orbit: { type: String, required: true }
});
module.exports = mongoose.model('Station', Station);
