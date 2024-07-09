
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://keepcarry2:dota2islife@cluster0.h65woeg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0l",{
      dbName: 'Kahayag',
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log('Mongodb connected')
    return true;
  } catch (error) {
    throw new error ("Error in connecting to mongodb")
  }
}

export default connectDB;
