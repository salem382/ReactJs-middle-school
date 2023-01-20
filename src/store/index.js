import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from './sidebarRouteSlice';
export default  configureStore({
    reducer:{
        sidebarSlice
    }   
})