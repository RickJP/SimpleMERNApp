'use strict()';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qaSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  choices: []
});


module.exports = mongoose.model("QA", qaSchema);