import './loginform.scss';
import SocialSign from '../../signupComponent/socialSign/Socialsign';
import TopPartSignup from '../../signupComponent/topPartSignUp/TopPartSignup';
import { Link } from 'react-router-dom';
const LoginForm = () => {

    return (
        <div className='loginform'>
            <TopPartSignup />
            <br/>
            <SocialSign  head = "Welcome Back"/>
             <form>
                <input placeholder='Full Name' type='text' />
                <input placeholder='Email Adress' type='email' />
                <input placeholder='Password' type='password' />
            </form>
            <button className='btn-create-account'>Login</button>
            <p className='login  d-flex'> 
            <span>Already have an account? </span> 
                <span>
                <Link to='/signup' className='nav-link'>
                    signup
                </Link>
                </span>
            </p>
        
        </div>
    )
}

export default LoginForm;