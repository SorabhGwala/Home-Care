import mongoose from "mongoose";


const mongoUrl = "mongodb://0.0.0.0:27017/HomeCare";

const connectDb = async () => {
    try {
     const connection =   await mongoose.connect(mongoUrl);
        console.log(`Connected to DB: ${connection.connection.name} at ${mongoUrl}`);
        
        return true;
    } catch (error) {
        console.error("Error connecting to database:", error);
        return false; 
    }
};

export default connectDb;


