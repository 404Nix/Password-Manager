import conf from "../conf/config.js";
import jwt from "jsonwebtoken";

const generateAccessToken = (userId, sessionId) => {

    return jwt.sign({ id: userId, sessionId }, conf.jwtSecret, {
        expiresIn: conf.expiresIn,
    });
};

export default generateAccessToken;
