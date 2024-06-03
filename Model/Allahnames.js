const mongoose = require('mongoose');

const allahNameSchema = new mongoose.Schema({
  NameEng: {
    type: String,
    required: true
  },
  NameArabic: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }
});

const AllahName = mongoose.model('AllahName', allahNameSchema);

module.exports = AllahName;
