import mongoose from "mongoose";

const uri = 'mongodb://127.0.0.1:27017/jobportalDB';

const connectDB = async () => {
  try {
    await mongoose.connect(uri); // Use the variable uri here
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
