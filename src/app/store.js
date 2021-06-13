import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlide";
import userReducer from "../features/user/userSlide";
import movieReducer from '../features/movies/movieSlide';

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    movie: movieReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
});
