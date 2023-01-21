import Navbar from "../../components/navbar/Navbar";
import Quiz from "../../components/quiz/Quiz";
import Sidebar from "../../components/sidebar/Sidebar";
import Wrapper from "../../components/wrapper/Wrapper";
import React from "react";

const Test = () => {


    return (
        <div>
            <Sidebar />
            <Wrapper>
                <Navbar/>
                <Quiz />
            </Wrapper>
        </div>
    )
}

export default React.memo(Test);