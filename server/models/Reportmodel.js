const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;
