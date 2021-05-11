const mongoose = require('mongoose')
const { Schema } = mongoose

const InternSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        maxLength: 100
    },
    country: {
        type: String, 
        required: true, 
        maxLength: 100
    }
})

module.exports = mongoose.model('Intern', InternSchema)