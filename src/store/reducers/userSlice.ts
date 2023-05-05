import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../utils/types";
import Cookies from "js-cookie";

const initialState: IUser = {
  access_level: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {},
    loginSuccessed: (state, action) => {
      Cookies.set("token", action.payload);
    },
    logout: () => {},
    logutSuccessed: (state, action) => {
      state.access_level = null;
      state.token = null;
    },
  },
});

export default userSlice.reducer;

export const { login, loginSuccessed, logout, logutSuccessed } =
  userSlice.actions;
