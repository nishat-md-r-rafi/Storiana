const mongoose = require('mongoose');

const ComSchema = new mongoose.Schema(
    {
    name: {type: String, required: true},
    email: {type: String, required: true},
    }
);

module.exports = mongoose.model('Complex', ComSchema)
