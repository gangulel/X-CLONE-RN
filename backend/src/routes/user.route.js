import express from "express"

const router = express.Router();

router.get("/profile/:username",getUserProfile);

export default router;