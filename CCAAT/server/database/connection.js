const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect("mongodb+srv://srishti:srishti@cluster0.h9eefkh.mongodb.net/?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB