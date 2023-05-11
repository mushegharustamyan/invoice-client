import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../utils/types";
import Cookies from "js-cookie";

const initialState: IUser = {
  role: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {},
    loginSuccessed: (state, action) => {
      state.role = action.payload.data.user.role.name;
      state.token = action.payload.data.token;
      Cookies.set("token", action.payload.data.token);
    },
    logout: () => {},
    logoutSuccessed: (state) => {
      state.role = null;
      state.token = null;
      Cookies.remove("token");
    },
    refresh: () => {},
    refreshSuccessed: (state , action) => {
      console.log(action.payload.data)
      state.role = action.payload.data.role.name
    }
  },
});

export default userSlice.reducer;

export const { login, loginSuccessed, logout, logoutSuccessed , refresh , refreshSuccessed} =
  userSlice.actions;
