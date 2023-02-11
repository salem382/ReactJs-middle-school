import LoginDraw from "../../components/loginCompinent/loginDraw/LoginDraw";
import LoginForm from "../../components/loginCompinent/loginForm/LoginForm";
import React from "react";


const Login = () => {

    return (
        <div className="d-flex login-page" 
        style={{overFlow:'hidden', height:'100vh'}}>
            <LoginForm />
            <LoginDraw />
        </div>
    )
}

export default React.memo(Login);
