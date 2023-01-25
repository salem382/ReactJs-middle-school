import { configureStore } from "@reduxjs/toolkit";
import userSlice from './CurrentUser';
import sidebarSlice from './sidebarRouteSlice';
export default  configureStore({
    reducer:{
        sidebarSlice,
        userSlice
    }   
})