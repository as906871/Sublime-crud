const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    mobile: {type: String, required: true},
    department: {type: String, required: true},
    designation: {type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date,required: true},
}, {
    timestamps: true
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;