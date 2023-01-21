import './loginform.scss';
import SocialSign from '../../signupComponent/socialSign/Socialsign';
import TopPartSignup from '../../signupComponent/topPartSignUp/TopPartSignup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const LoginForm = () => {


    const [showPass, setShowPass] = useState(false);

    return (
        <div className='loginform'>
            <TopPartSignup />
            <br/>
            <SocialSign  head = "Welcome Back"/>
             <form>
                <input placeholder='Full Name' type='text' />
                <input placeholder='Email Adress' type='email' />
                <div className='position-relative m-auto w-75' >
                    <input className='w-100' placeholder='Password' type={showPass ? 'text' : 'password'} />
                    <FontAwesomeIcon onMouseUp={() =>setShowPass(false)} onMouseDown={() =>setShowPass(true)} className='position-absolute' style={{color:'#c1c1c1', right:"0", top:'20px', cursor:'pointer'}} icon={faEye}/>
                </div>
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