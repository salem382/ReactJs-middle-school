import LoginDraw from "../../components/loginCompinent/loginDraw/LoginDraw";
import LoginForm from "../../components/loginCompinent/loginForm/LoginForm";

const Login = () => {

    return (
        <div className="d-flex" 
        style={{overFlow:'hidden', height:'100vh'}}>
            <LoginForm />
            <LoginDraw />
        </div>
    )
}

export default Login;
