import { createSlice } from "@reduxjs/toolkit";
import { IAuth, IUser } from "../../utils/types";
import Cookies from "js-cookie";

const initialState: IAuth = {
  role: null,
  token: null,
  fullname: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {},
    loginSuccessed: (state, action) => {
      state.role = action.payload.data.user.role.name;
      state.token = action.payload.data.token;
      state.fullname = action.payload.data.user.fullname
      Cookies.set("token", action.payload.data.token);
    },
    logout: () => {},
    logoutSuccessed: (state) => {
      state.role = null;
      state.token = null;
      state.fullname = null
      Cookies.remove("token");
    },
    refresh: () => {},
    refreshSuccessed: (state , action) => {
      state.token = action.payload.token
      state.role = action.payload.response.data.role.name
      state.fullname = action.payload.response.data.fullname
    }
  },
});

export default authSlice.reducer;

export const { login, loginSuccessed, logout, logoutSuccessed , refresh , refreshSuccessed} =
  authSlice.actions;
