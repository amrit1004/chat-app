import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectRoute = async(req, res ,next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unaurhorized -No token provided" });
        }
        const decoded = jwt.verify(token ,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({error:"Unaurhorized -Invalid token" });
        const user =  User.findById(decoded.userId).selected("-password");
        if(!user){
            return res.status(400).json({error:"User not found"});
        }
        req.user = user;
        next();
        }
    } catch (error) {
        console.log("Error in protect Route" ,error.message);
        res.status(500).json({error:"Internal server error"})
    }
}
export default protectRoute;