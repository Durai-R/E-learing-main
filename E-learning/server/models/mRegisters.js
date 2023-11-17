const mongoose = require('mongoose');


const regSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    highedu: {
        type: Number,
        required: true
    },
    courses: [{
        crsId: {
          type: String,
          required: true
        },
        name: {
          type: String,
          required: true
        }
    }]
});

module.exports = mongoose.model('register', regSchema);