import express from "express";
import dotenv from "dotenv"
import authroutes from "./routes/auth.route.js"
import connectToMongoDB from "./db/connectToDatabse.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.get("/" ,(req ,res)=>{
    res.send("Hello World");
})
app.use("/api/auth" ,authroutes);
app.listen(PORT ,()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)}); 
