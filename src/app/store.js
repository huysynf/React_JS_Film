import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlide";
import userReducer from "../features/user/userSlide";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
});
