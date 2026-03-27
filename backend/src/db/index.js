import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import conf from "../conf/config.js";

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(`${conf.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
