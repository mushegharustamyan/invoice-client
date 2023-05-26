import { createSlice } from "@reduxjs/toolkit";
import { IAuth, IUser } from "../../utils/types";
import Cookies from "js-cookie";

const initialState: IAuth = {
  role: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
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
      console.log(action.payload.token ,  action.payload.response.data.role.name)
      state.token = action.payload.token
      state.role = action.payload.response.data.role.name
    }
  },
});

export default authSlice.reducer;

export const { login, loginSuccessed, logout, logoutSuccessed , refresh , refreshSuccessed} =
  authSlice.actions;
