import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../config/axios';

const initialState = {
  users: [],
  user:{},
  status: 'idle'
}

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
  }
});


export const getUsers = state => state.user.users;
export default userSlide.reducer;