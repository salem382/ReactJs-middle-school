import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const getUser = createAsyncThunk('user/getUser' ,async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const {data} = await axios.get('http://localhost:5000/user', {
            headers: {
              token: `${localStorage.getItem("newbrainsToken")}`
            }
        })
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

const userSlice = createSlice({
    name:'user',
    initialState: { user: {}, isLoading: false, error: null },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = {...action.payload.user};
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
}) 

export default userSlice.reducer;
