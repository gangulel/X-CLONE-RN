import asyncHandler from "express-async-handler"
import User from "../models/user.model"
export const getUserProfile = asyncHandler(async (req,res) => {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({error:"User not found"});

    res.status(200).json({ user });
});

export const updateProfile = asyncHandler(async(erq))