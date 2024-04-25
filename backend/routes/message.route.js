import express from "express";
import { sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectroute.js";
const router = express.Router();

router.post("/send/:id" ,protectRoute ,sendMessage);

export default router;