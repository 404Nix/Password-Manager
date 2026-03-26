import express from "express";
import requireAuth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", () => {}, () => {} );
router.post("/login", () => {}, () => {} );
router.get("/register", requireAuth, () => {} );

export default router;