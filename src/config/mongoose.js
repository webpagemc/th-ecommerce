import mongoose from "mongoose";
import parsers from "../utils/parsers.js";
import enviroment from "./dotenv.js"

const connectDB = async() => {

    try {
        
        await mongoose.connect(enviroment.DB_URL);
        console.log("Connection Successfull");
        
    } catch (err) {

        parsers.handleError(err);
        console.log("Error!");
        
    }

}

export default connectDB;