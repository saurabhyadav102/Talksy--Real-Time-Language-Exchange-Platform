import mongoose from "mongoose";

export const connectdb =async ()=>{

    try {
        const conn=  await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected:${conn.connection.host}`)
    } catch (error) {
        console.log("error is connecting to mongodb",error)
        process.exit(1)   //i means failure
    }
}