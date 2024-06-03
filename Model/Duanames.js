const mongoose = require('mongoose');

const DuanameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const DuaName = mongoose.model('DuaName', DuanameSchema);

module.exports = DuaName;
