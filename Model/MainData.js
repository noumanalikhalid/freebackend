const mongoose = require('mongoose');

const mainDataSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Ref: {
    type: String,
    required: true,
   
  },
  Ayat: {
    type: String,
    required: true
  },
  Eng: {
    type: String,
    required: true
  },
  Urdu: {
    type: String,
    required: true
  }
});

const MainData = mongoose.model('MainData', mainDataSchema);

module.exports = MainData;
