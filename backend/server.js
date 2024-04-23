import express from "express";
import dotenv from "dotenv"
import authroutes from "./routes/auth.route.js"
import connectToMongoDB from "./db/connectToDatabse.js";
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use(express.json());
app.use("/api/auth" ,authroutes);
app.listen(PORT ,()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)}); 
