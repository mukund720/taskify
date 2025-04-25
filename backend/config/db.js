const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  console.log('Connecting to MongoDB...');
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', process.env.MONGO_URI, err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
