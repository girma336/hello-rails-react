import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchData =  createAsyncThunk('fatchData', async () => {
    try {
    const respo = await axios.get('http://127.0.0.1:3000/api/message',  {
              AxiosHeaders: { 'cache-control': 'public, max-age=315576', 'content-length': '14892', 'Content-type': 'application/json' },
            });
            return respo.data;
          } catch (error) {
            return error;
          }
});


const messageSlice = createSlice({
    name: 'greeting',
   initialState: {
        greeting: [],
        isLoading: false,
        error: null,
    },

    extraReducers(builder) {
        builder.addCase(fetchData.pending, (state, action) => {
    
            state.isLoading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => ({
                  ...state,
                  greeting: action.payload,
                  isLoading: false
        }));
        builder.addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false,
            state.error = action.error;
        });
    }
});

export default fetchData;
export const messageReducer = messageSlice.reducer;

// const urlLink = 'https://finalspaceapi.com/api/v0/character';

// export const feachData = createAsyncThunk('fetchData', async () => {
//   try {
//     const respo = await axios.get(urlLink, {
//       AxiosHeaders: { 'cache-control': 'public, max-age=315576', 'content-length': '14892', 'Content-type': 'application/json' },
//     });
//     return respo.data;
//   } catch (error) {
//     return error;
//   }
// });

// export const elementSlice = createSlice({
//   name: 'spaces',
//   initialState: {
//     spaces: [],
//   },

//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(feachData.fulfilled, (state, action) => ({
//       ...state,
//       spaces: action.payload,
//     }));
//   },
// });

// export const changeSearchTerm = elementSlice.actions;
// export const renderSpaces = elementSlice.reducer;
