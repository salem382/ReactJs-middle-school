import { configureStore } from "@reduxjs/toolkit";
import userSlice from './CurrentUser';
import sidebarSlice from './sidebarRouteSlice';
import currentLang from "./langSlice"
import units from './unitsSlice';
import quiz from './quizSlice';
import End from './showResultSlice'
import currentSubject from "./currentSubjectSlice";

export default  configureStore({
    reducer:{
        sidebarSlice,
        userSlice,
        currentLang,
        units,
        quiz,
        End,
        currentSubject
    }   
})
