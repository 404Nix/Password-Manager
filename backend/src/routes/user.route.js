import express from "express";
import requireAuth from "../middlewares/auth.middleware.js";
import {
    getMe,
    loginUser,
    logOut,
    logOutAll,
    refreshToken,
    registerUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/get-me", requireAuth, getMe);

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/refresh-token", refreshToken);

router.get("/logout", logOut);
router.get("/logout-all", logOutAll);

export default router;
