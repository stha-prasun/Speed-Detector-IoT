import mongoose, { Schema, Document } from "mongoose";

export interface ISpeedLog extends Document {
  userId: mongoose.Types.ObjectId; // which admin/user created or owns this data
  speed: Number; // detected speed
  fineAmount: Number; // calculated fine
}

const speedLogSchema: Schema<ISpeedLog> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },

    speed: { type: Number, required: true },
    fineAmount: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ISpeedLog>("SpeedLog", speedLogSchema);
