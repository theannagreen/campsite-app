const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//the schema defines the shape of the do 
const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    email: String
    }, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);