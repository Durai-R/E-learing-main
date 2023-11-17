const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    code: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    actulFee: {
      type: Number,
      required: true
    },
    discFee: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      required: true
    },
    regCount: {
      type: Number,
    },
    offers: {
      type: String,
    }
   
  });

module.exports = mongoose.model('course', courseSchema);
