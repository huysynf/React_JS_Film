import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../config/axios';

const initialState = {
  user: 0,
  accessToken: null,
  status: 'idle',
  loading: false,
  errors:[],
  error:'',
};

export const loginAsync = createAsyncThunk('auths/loginAsync',
    async (data, {rejectWithValue}) => {
      try {
        return await axios.post('/login', data);
      } catch (response) {
        return rejectWithValue(response);
      }
    },
);

const authSlide = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state, payload) =>{
      state.errors = [];
      state.error = '';
    }
  },
  extraReducers: {
    // [loginAsync.pending]: (state, action) => {
    //   state.loading = true;
    //   state.status = 'loading';
    // },
    // [loginAsync.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.status = 'idle';
    //   let {access_token,refresh_token, user} =action.payload.data.data;
    //   state.accessToken = access_token;
    //   state.user = user;
    //   state.errors = []
    //   state.error = ''
    //   localStorage.refresh = refresh_token;
    // },
    // [loginAsync.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.status = 'error';
    //   state.errors = action?.payload?.data?.errors
    //   state.error = action?.payload?.data?.data?.error
    // },
  },
});

// export const getStatus = state => state.auth.status;
// export const getLoading = state => state.auth.loading;
// export const getUser = state => state.auth?.users;
// export const getErrors = state => state.auth.errors;
// export const getError = state => state.auth.error;

export const {resetError} = authSlide.actions;
export default authSlide.reducer;