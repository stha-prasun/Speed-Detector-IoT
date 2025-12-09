import { Request, Response } from "express";
import User from "../models/userSchema";
import SpeedLog from "../models/speedLogSchema";

interface logRequestBody {
  userId: string;
  speed: number;
  fineAmount: number;
}

export const createLog = async (
  req: Request<{}, {}, logRequestBody>,
  res: Response
): Promise<Response> => {
  try {
    const { userId, speed, fineAmount } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "UserID cannot be left empty",
        success: false,
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "Invalid UserID!!",
        success: false,
      });
    }

    await SpeedLog.create({
      userId,
      speed,
      fineAmount
    });

    return res.status(201).json({
      message: "Ticket created successfully!!",
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


