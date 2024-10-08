import mongoose from "mongoose";

let connected = false;

const connectDB = async() => {
    mongoose.set('strict', true);

    // if database is already connected, don't connect again


    if(connected) {
        console.log('Mongo is already connected');
        return;
    }

    // Connect to MongoDB


    try {
        await mongoose.connect(process.env.MONGODB_URI)
        connected = true;

    } catch (error) {
        console.log('error')
    }
};

export default connectDB;