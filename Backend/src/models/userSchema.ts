import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  totalFine: Number;
}

// Mongoose schema
const userSchema: Schema<IUser> = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    totalFine: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
