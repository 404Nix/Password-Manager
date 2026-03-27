import { User } from "../models/user.model.js";
import generateToken from "../utils/token.js";

export const registerUser = async (req, res) => {
    const { name, icon, email, password } = req.body;

    const alreadyRegistered = await User.findOne({ email });

    if (alreadyRegistered) {
        return res.status(409).json({ message: "Email is already registered" });
    }

    const user = await User.create({
        name,
        icon,
        email,
        password,
    });

    const token = generateToken(user._id);

    res.status(201).json({
        message: "User registered successfully",
        user: {
            name: user.name,
            email: user.email,
            icon: user.icon,
        },
        token,
    });
};

export const getMe = async (req, res) => {
    const { id } = req.user;

    const user = await User.findById(id);

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            name: user.name,
            email: user.email,
            icon: user.icon,
        }
    })
};
