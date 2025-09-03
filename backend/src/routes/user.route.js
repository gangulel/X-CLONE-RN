import express from "express";
import { getUserProfile } from "../controllers/user.controller.js";

const router = express.Router()

router.get("/profile/:username",getUserProfile);
router.put("/profile",protectRoute,updateProfile);

// update profile => auth

export default router;