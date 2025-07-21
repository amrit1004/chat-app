import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const SECRET_KEY = 'zu3beyE2Nfn36gGUWUf3UdoizCfsZ7OciLt84Fw+7J8='
const protectRoute = async(req, res ,next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"Unaurhorized -No token provided" });
        }
        const decoded = jwt.verify(token ,SECRET_KEY);
        if(!decoded){
            return res.status(401).json({error:"Unaurhorized -Invalid token" });
        }
        const user =  await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(404).json({error:"User not found"});
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.log("Error in protect Route" ,error.message);
        res.status(500).json({error:"Internal server error"})
    }
}
export default protectRoute;