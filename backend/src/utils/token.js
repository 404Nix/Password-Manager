import conf from "../conf/index.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
    if (!conf.jwtSecret || !conf.expiresIn)
        throw new Error(
            "JWT secret and expiration time must be defined in the environment variables.",
        );

    return jwt.sign({ id: userId }, conf.jwtSecret, {
        expiresIn: conf.expiresIn,
    });
};

export default generateToken;
