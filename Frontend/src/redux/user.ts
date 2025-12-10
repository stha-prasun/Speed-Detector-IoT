import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface loggedInUser {
  _id: string;
  username: string;
  totalFine: number;
}

interface loggedInUserState {
  loggedInUser: null | loggedInUser;
}

const initialState: loggedInUserState = {
  loggedInUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<loggedInUser | null>) => {
      state.loggedInUser = action.payload;
    },
  },
});

export const { setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;
