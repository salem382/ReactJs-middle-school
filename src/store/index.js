import { configureStore } from "@reduxjs/toolkit";
import userSlice from './CurrentUser';
import sidebarSlice from './sidebarRouteSlice';
import currentLang from "./langSlice"


export default  configureStore({
    reducer:{
        sidebarSlice,
        userSlice,
        currentLang
    }   
})