import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
import conf from "../conf/index.js";

const connectDB = async () => {
    if (!conf.MONGODB_URI)
        throw new Error("MONGODB_URI is not defined in environment variables");

    try {
        const conn = await mongoose.connect(`${conf.MONGODB_URI}/${DB_NAME}`);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;
