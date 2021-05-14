const mongoose = require('mongoose')
const { Schema } = mongoose
const validator = require('validator')

const InternSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        maxLength: 100,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    country: {
        type: String, 
        required: true, 
        maxLength: 100
    }
})

module.exports = mongoose.model('Intern', InternSchema)