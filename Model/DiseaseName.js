const mongoose = require('mongoose');

const DiseaseNameSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  
});

const DiseaseName = mongoose.model('DiseaseName', DiseaseNameSchema);

module.exports = DiseaseName;
