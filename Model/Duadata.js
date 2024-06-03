const mongoose = require('mongoose');

const duaDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
ayat: {
    type: String,
    required: true
  },
  eng: {
    type: String,
    required: true
  },
  urdu: {
    type: String,
    required: true
  }
});

const DuaData = mongoose.model('DuaData', duaDataSchema);

module.exports = DuaData;
