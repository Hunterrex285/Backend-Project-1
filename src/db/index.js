import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}./${DB_NAME}`)
        console.log(`\nMONGODB connected !! DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        console.log(`${process.env.MONGODB_URI}./${DB_NAME}`)
        process.exit(1)
    }
}


export default connectDB
