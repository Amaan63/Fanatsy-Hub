import express from "express";
import { getProfile } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRoute = express.Router();

userRoute.get("/profile", authMiddleware, getProfile);

export default userRoute;
