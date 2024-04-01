const mongoose = require('mongoose')

// const mongoURI = "mongodb://127.0.0.1:27017/practice"
const mongoURI = "mongodb+srv://digraprince7:ffY62Qp1rit4VsKD@cluster0.4b39wtn.mongodb.net/"
const connectToMongo = async () => {
    // mongoose.set('strictQuery', true)
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Mongo connected successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongo;