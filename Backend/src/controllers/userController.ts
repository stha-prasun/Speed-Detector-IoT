import { Request, Response } from "express";
import User from "../models/userSchema";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface SignupRequestBody {
  username: string;
  password: string;
}

interface LoginRequestBody {
  username: string;
  password: string;
}

export const signup = async (
  req: Request<{}, {}, SignupRequestBody>,
  res: Response
): Promise<Response> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Fields cannot be left empty",
        success: false,
      });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({
        message: "Username Already In Use!!",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully!!",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

// Express Request<T> generic type parameters:

// Request<ParamsDictionary, ResBody, ReqBody, ReqQuery, Locals>

// Example we used:
//   Request<{}, {}, LoginRequestBody>

// - The 1st {}  → means no URL params (req.params is empty).
// - The 2nd {}  → means no custom response body typing.
// - The 3rd arg → LoginRequestBody, so req.body has { username: string; password: string }.

export const login = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response
): Promise<Response> => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Fields cannot be left empty!!",
        success: false,
      });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({
        message: "Invalid User",
        success: false,
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(400).json({
        message: "Incorrect Username or Password",
        success: false,
      });
    }

    const tokenData = {
      userID: user._id,
    };

    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY is not defined in environment variables");
    }

    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    const loggedInUser = {
      _id: user._id,
      username: user.username,
    };

    return res
      .status(201)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      })
      .json({
        message: `Welcome Back ${user.username}!!`,
        success: true,
        loggedInUser,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};
