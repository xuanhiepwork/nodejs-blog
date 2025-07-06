
const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const Course = new Schema({
    name: {type :String, maxlenth: 255,},
    description: {type: String, maxlenth: 600,},
    image: {type: String, maxlenth: 255,},
    createAt: {type: Date, default: Date.now,},
    updateAt: {type: Date, default: Date.now,},
})

module.exports = mongoose.model('Course', Course);