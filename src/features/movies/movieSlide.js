import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../config/axios';

const initialState = {
  recommend: [],
  newDisney: [],
  original: [],
  trending: []
}


export const fetchFilms = createAsyncThunk('movies/fetchMovies',
    async (data,{rejectWithValue}) => {
      try {
        return await axios.get('/films');
      } catch ({response}) {
        return rejectWithValue(response);
      }
    },
);


const movieSlide = createSlice({
  name: 'movies',
  initialState,
  reducers:{
    setMovies: (state, action) =>{
      state.recommend = action.payload.recommend
      state.newDisney = action.payload.newDisney
      state.original = action.payload.original
      state.trending = action.payload.trending
    }
  },
  
  extraReducers: {
    [fetchFilms.pending] : (state, action)=>{
      console.log(action);
    },
    [fetchFilms.fulfilled] : (state, action)=>{
      let films =  action.payload.data.data;
      films.forEach(item=>{
        switch (item.type) {
          case "recommend":
            state.recommend = [...state.recommend,item];
            break;
          case 'new':
            state.newDisney = [...state.newDisney,item];
            break;
          case "trending":
            state.trending = [...state.trending,item];
            break;
          case "original":
            state.original = [...state.original,item];
            break;
          default:
            break;
        }
      })
    },
    [fetchFilms.rejected] : (state, action)=>{
      console.log(action);
    },
  }
})

export const {setMovies} = movieSlide.actions;

export const selectRecommend = state => state.movie.recommend
export const selectNewDisNey = state => state.movie.newDisney
export const selectOriginal = state => state.movie.original
export const selectTrending = state => state.movie.trending

export default movieSlide.reducer;