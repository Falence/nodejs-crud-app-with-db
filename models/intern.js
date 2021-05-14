const mongoose = require('mongoose')
const { Schema } = mongoose
const validator = require('validator')

const InternSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name'],
        maxLength: 100,
        minLength: 3
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        maxLength: 100,
        unique: [true, 'This email is already taken'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    country: {
        type: String, 
        required: [true, 'Please provide your country'], 
        maxLength: 100,
        minLength: 2
    }
})

module.exports = mongoose.model('Intern', InternSchema)