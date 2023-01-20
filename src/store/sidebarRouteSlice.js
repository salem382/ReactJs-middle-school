import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    openSidebar : false
}

const sidebarSlice = createSlice({
    name:'sidebar',
    initialState,
    reducers:{
       
        setOpenSidebar :(state, action) => {
            state.openSidebar = action.payload;
        } 
    }
})

export default sidebarSlice.reducer;
export const {setOpenSidebar} = sidebarSlice.actions;
