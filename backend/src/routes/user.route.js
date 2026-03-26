import express from "express";
import requireAuth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", () => {}, () => {} );
router.post("/login", () => {}, () => {} );
router.post("/password/verify", requireAuth, () => {} );
router.get("/me", requireAuth, () => {} );

export default router;