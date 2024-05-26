const mongoose = require('mongoose');

const MedicalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    eye: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Medical = mongoose.model("Medical", MedicalSchema);

module.exports = Medical;
