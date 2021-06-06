import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../config/axios';

const initialState = {
  user: 0,
  accessToken: null,
  status: 'idle',
  loading: false,
};

export const loginAsync = createAsyncThunk('auths/loginAsync',
    async (data, {rejectWithValue}) => {
      try {
        return await axios.post('/login', data);
      } catch ({response}) {
        return rejectWithValue(response);
      }
    },
);

const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [loginAsync.pending]: (state, action) => {
      console.log('pending', action);
      state.loading = true;
      state.status = 'loading';
    },
    [loginAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = 'idle';
      let {access_token,refresh_token, user} =action.payload.data.data;
      state.accessToken = access_token;
      state.user = user;
      localStorage.refresh = refresh_token;
    },
    [loginAsync.rejected]: (state, action) => {
      state.loading = false;
      state.status = 'error';
      
      console.log('error', action);
    },
  },
});

export const getStatus = state => state.auth.status;
export const getUser = state => state.auth?.users;
export const getAccessToken = state => state.accessToken;

export default authSlide.reducer;