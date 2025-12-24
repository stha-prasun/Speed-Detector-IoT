import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import speedLogSlice from "./speedLog";

const store = configureStore({
  reducer: {
    User: userSlice,
    SpeedLog: speedLogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
