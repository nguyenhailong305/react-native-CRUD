const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    name: String,
    age : String
})
module.exports = mongoose.model('student', itemSchema)