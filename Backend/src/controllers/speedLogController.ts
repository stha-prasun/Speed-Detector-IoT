import { Request, Response } from "express";
import User from "../models/userSchema";
import SpeedLog from "../models/speedLogSchema";

interface logRequestBody {
  userId: string;
  speed: Number;
  fineAmount: Number;
}

interface getLogRequestParams {
  userId: string;
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

    await User.findByIdAndUpdate(userId, {
      $inc: { totalFine: fineAmount },
    });

    await user.save();

    await SpeedLog.create({
      userId,
      speed,
      fineAmount,
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

export const getAllLogs = async (
  req: Request<getLogRequestParams, {}, {}>,
  res: Response
): Promise<Response> => {
  try {
    const { userId } = req.params;

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

    const tickets = await SpeedLog.find({ userId });

    return res.status(200).json({
      tickets,
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
