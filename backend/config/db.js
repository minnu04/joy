import mongoose from 'mongoose';

export let isConnectedToMongo = false;

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/joymech_forgex_2026';
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 8000,
    });
    isConnectedToMongo = true;
    console.log(`🚀 [MongoDB] Connected: ${conn.connection.host}`);
  } catch (error) {
    isConnectedToMongo = false;
    console.warn(`⚠️ [MongoDB] Cloud/Local connection offline (${error.message}). Using In-Memory Database Fallback.`);
  }
};
