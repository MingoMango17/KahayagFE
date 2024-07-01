
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI,{
      dbName: 'Kahayag',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongodb connected')
    return true;
  } catch (error) {
    throw new error ("Error in connecting to mongodb")
  }
}

export default connectDB;
