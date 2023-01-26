const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title   : {required: true, type: String, unique: true},
    img     : {required: true, type: String },
    desc    : {required: true, type: String },
    category: {required: true, type: Array  },
    size    : {required: true, type: String },
    price   : {required: true, type: Number },
    color   : {required: true, type: String },
    },
    {timestamps : true},
)

module.exports = mongoose.model('Product', productSchema);