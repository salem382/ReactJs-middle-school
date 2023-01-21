import './signup.scss';
import Socialsign from '../socialSign/Socialsign';
import {Link} from 'react-router-dom';
import TopPartSignup from '../topPartSignUp/TopPartSignup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const SignUpForm = () => {

    const [showPass, setShowPass] = useState(false);

    return (
        <section className='signup-form'>
            <TopPartSignup />
            <Socialsign head ={'Create Account'} />
           <form>
                <input placeholder='Full Name' type='text' />
                <input placeholder='Email Adress' type='email' />
                <div className='position-relative'>
                    <input  placeholder='Password' type={showPass ? 'text' : 'password'} />
                    <FontAwesomeIcon onMouseUp={() =>setShowPass(false)} onMouseDown={() =>setShowPass(true)} className='position-absolute' style={{color:'#c1c1c1', right:"100px", top:'10px', cursor:'pointer'}} icon={faEye}/>
                </div>
                <input placeholder='Age' type='number' />
    
                <select className='select' name="lang" id="lang">
                    <option value="volvo">Gender</option>
                    <option value="volvo">Male</option>
                    <option value="saab">Female</option>
                </select>
                
                <input placeholder='Phone' type='text' />
            </form>
            <button className='btn-create-account'>Create Account</button>
            <p className='login ps-5 pb-4 pb-lg-0 d-flex'> 
                <span>Already have an account? </span> 
                <span>
                <Link to='/login' className='nav-link'>
                    Login
                </Link>
                </span>
            </p>
        </section>
    )
}

export default SignUpForm;