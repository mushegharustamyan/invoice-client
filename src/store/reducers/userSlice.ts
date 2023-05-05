import { createSlice } from "@reduxjs/toolkit";

interface IState {
  access_level: number | null;
  token: string | null;
}

const initialState: IState = {
  access_level: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: () => {},
    loginSuccessed: (state, action) => {
      const { access_level, email, password, token } = action.payload;

      state.access_level = access_level;
      state.token = token;
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
