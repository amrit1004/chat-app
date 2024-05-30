import express from "express";
import dotenv from "dotenv"
import authroutes from "./routes/auth.route.js"
import path from "path"
import cookieParser from "cookie-parser";
import messageroutes from "./routes/message.route.js"
import userroutes from "./routes/user.route.js"
import connectToMongoDB from "./db/connectToDatabse.js";
import {app , server } from "./socket/socket.js";
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth" ,authroutes);
app.use("/api/messages" ,messageroutes);
app.use("/api/users" ,userroutes);
app.use(express.static(path.join(__dirname ,"/frontend/dist")))
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(PORT ,()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)}); 
