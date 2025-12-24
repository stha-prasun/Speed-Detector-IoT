import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SpeedLog {
  _id: string;
  userId: string;
  speed: Number;
  fineAmount: Number
  createdAt: string;
  updatedAt: string;
}

interface SpeedLogState {
  SpeedLog: SpeedLog[];
}

const initialState: SpeedLogState = {
  SpeedLog: [],
};

const SpeedLogSlice = createSlice({
  name: "speedlog",
  initialState,
  reducers: {
    setSpeedLog: (state, action: PayloadAction<SpeedLog[]>) => {
      state.SpeedLog = action.payload;
    },
  },
});

export const { setSpeedLog } = SpeedLogSlice.actions;
export default SpeedLogSlice.reducer;
