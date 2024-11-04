const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/biblioteca')
        console.log('MongoDB connected...')

    }catch(err){
        console.error('Error connecting to MongoDB:', err.message)
        process.exit(1) //encerra o proscesso em caso de falha
    }
}

module.exports = connectDB;