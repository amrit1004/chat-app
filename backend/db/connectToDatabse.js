import mongoose from "mongoose";
const MONOGO_URI="mongodb+srv://amritsinghal2211:sbs84Bx2WFXVul0b@cluster0.igflign.mongodb.net/"
const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI || MONOGO_URI, );
        console.log("Connected to database")
    } catch (error) {
        
        console.log("Error connecting to MOngoDB" ,error.message);
    }
};
export default  connectToMongoDB;