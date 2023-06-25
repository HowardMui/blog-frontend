import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserLoginPayload } from "models";

// import { AppThunk } from 'store';

interface AuthState {
  error: string | null;
  success: string | null;
  loginLoading: boolean;
  loginError: string;
  Auth: any | null;
}

const initialState = {
  error: "",
  success: "ok",
  loginLoading: false,
  Auth: null,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart(state) {
      state.loginLoading = true;
      state.loginError = "";
    },
    loginSuccess(state) {
      state.loginLoading = false;
      state.loginError = "";
    },
    loginFail(state, action: PayloadAction<string>) {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
    setProfile(state, action: PayloadAction<UserLoginPayload | null>) {
      state.Auth = action.payload;
    },
    reset() {
      return initialState;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, setProfile } = authSlice.actions;
export default authSlice.reducer;
