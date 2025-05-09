import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("DB is connected !!");
  } catch (error) {
    console.log("DB not connected");
  }
};

export default connectDb;
