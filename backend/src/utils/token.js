import conf from "../conf/config.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {

    return jwt.sign({ id: userId }, conf.jwtSecret, {
        expiresIn: conf.expiresIn,
    });
};

export default generateToken;
