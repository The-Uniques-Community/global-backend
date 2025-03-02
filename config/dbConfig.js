import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI ,{
            useNewUrlParser: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default dbConnect;
