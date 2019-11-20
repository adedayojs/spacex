const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const Station = new Schema({
  name: { type: String, required: true, unique: true },
  type: {
    type: String,
    required: true,
    enum: {
      values: ['NATURAL', 'MAN-MADE'],
      message: 'Values Should be one of these NATURAL, MAN-MADE'
    }
  },
  orbit: { type: String, required: true }
});
module.exports = mongoose.model('Station', Station);
