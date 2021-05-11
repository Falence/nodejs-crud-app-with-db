const express = require('express')
const mongoose = require('mongoose')
const internRouter = require('./routes/intern')


const app = express()
const port = process.env.PORT || 5000


// Set up default mongoose connection
const mongoDB = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.lezon.mongodb.net/zuriCrud?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// get the default connection
const db = mongoose.connection
// Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))
// On succesful connect
db.once('open', () => {
    console.log('Connected to MongoDB Server!.')
})


// Middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


// Routing
app.use('/api', internRouter)


// Handle Errors
app.use((req, res, next) => {
    res.status(404).json({
        message: '404 - Not Found!'
    })
})


// Start server
app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`)
})