import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUser = createAsyncThunk('user/getUser' ,async (_, thunkAPI) => {

    const {rejectWithValue} = thunkAPI;
    try {
        const {data} = await axios.get('https://newbrainsmiddle.com/api/auth/userProfile', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("newbrainsToken")}`
            }
        })
        return data;
    }catch (error) {
        return rejectWithValue(error.message);
    }
})



const userSlice = createSlice({
    name:'user',
    initialState:{user:{}, isLoading: false, error:null},
    extraReducers:{
    [getUser.pending]:(state, action)=> {
        state.isLoading = true;
        state.error = null;
    },
    [getUser.fulfilled]:(state, action)=> {
        state.isLoading = false;
        state.user = {...action.payload.user};
    },
    [getUser.rejected]:(state, action)=> {
        state.isLoading = false;
        state.error = action.payload;
    },
    
    }
}) 

export default userSlice.reducer;