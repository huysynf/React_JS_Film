import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../config/axios';

const initialState = {
  users: [],
  user:{},
  accessToken: null,
  status: 'idle',
  loading: false,
  errors:[],
  error:'',
}

export const loginAsync = createAsyncThunk('auth/loginAsync',
    async (data, {rejectWithValue}) => {
      try {
        return await axios.post('/login', data);
      } catch (response) {
        return rejectWithValue(response);
      }
    },
);

export const fetchUsers = createAsyncThunk('user/fetchUsers',
    async (data,{rejectWithValue}) => {
      try {
        return await axios.get('/users');
      } catch ({response}) {
        return rejectWithValue(response);
      }
    },
);

const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetError: (state, payload) =>{
      state.errors = [];
      state.error = '';
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action)=>{
      console.log('pending');
      state.status = 'loading'
    },
  
    [fetchUsers.fulfilled]: (state, action)=>{
      state.users = action.payload.data.data;
    },
  
    [fetchUsers.rejected]: (state, action)=>{
      console.log('error', action);
  
    },
  
    [loginAsync.pending]: (state, action) => {
      state.loading = true;
      state.status = 'loading';
    },
    [loginAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = 'idle';
      let {access_token,refresh_token, user} =action.payload.data.data;
      state.accessToken = access_token;
      state.user = user;
      state.errors = []
      state.error = ''
      localStorage.refresh = refresh_token;
    },
    [loginAsync.rejected]: (state, action) => {
      state.loading = false;
      state.status = 'error';
      state.errors = action?.payload?.data?.errors
      state.error = action?.payload?.data?.data?.error
    },
  }
});


export const getUsers = state => state.user.users;
export const getStatus = state => state?.user?.status;
export const getLoading = state => state?.user?.loading;
export const getErrors = state => state?.user?.errors;
export const getError = state => state?.user?.error;
export const getUserCurrent = state => state.user.user;
export const {resetError} = userSlide.actions;
export default userSlide.reducer;