import Navbar from "../../components/navbar/Navbar";
import Quiz from "../../components/quiz/Quiz";
import Sidebar from "../../components/sidebar/Sidebar";
import Wrapper from "../../components/wrapper/Wrapper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import  {getUQuizess} from '../../store/quizSlice';
import {setIsEnd, defaultTotalSubmited} from '../../store/showResultSlice';
import LessonsTopPart from "../../components/LessonsTopPart/LessonsTopPart";

const Test = () => {


    const dispatch = useDispatch();

    const params = useParams();
   
    const {isLoading} = useSelector(state => state.quiz);

    useEffect(() => {

        dispatch(getUQuizess(params.id))
        dispatch(setIsEnd(false));
        dispatch(defaultTotalSubmited());
        
    },[])



    return (
        <div>
            <Sidebar />
            <Navbar/>
            <Wrapper>
            {isLoading ? <div className="fs-bold fs-5 mx-4">No Quizzess yet !</div> : <>
                    <LessonsTopPart />
                    <Quiz />
            </>}    
            </Wrapper>
        </div>
    )
}

export default React.memo(Test);