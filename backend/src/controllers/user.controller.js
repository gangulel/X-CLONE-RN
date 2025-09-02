import asyncHandler from "express-async-handler"

export const getUserProfile = asyncHandler(async (req,res) => {
    const { username } = req.params;
})