import './signup.scss';
import Socialsign from '../socialSign/Socialsign';
import {Link} from 'react-router-dom';
import TopPartSignup from '../topPartSignUp/TopPartSignup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from "axios";
import Joi from 'joi';

const SignUpForm = () => {

    const [showPass, setShowPass] = useState(false);
    const [userData, setUserData] = useState({
        first_name:"",
	    last_name:"",
        email:"",
        password:"",
        age:""
    });

    const userValidation = () => {
        const schema = Joi.object({
            name:Joi.string().min(3).max(255).required(),
            email:Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password:Joi.string()
            .pattern(new RegExp('/[a-z]{1,}[A-Z]{1,}[0-9]{1,}[@$!%*#?&]{1,}/')).min(10).required(),
            phone:Joi.number().pattern(new RegExp('/{11}/')).required(),
            gender:Joi.pattern(new RegExp('/(male|female)/')),
            age:Joi.number().integer(),

        })
        return schema.validate(userData,{abortEarly:false});
    }











    return (
        <section className='signup-form'>
            <TopPartSignup />
            <Socialsign head ={'Create Account'} />
            <form className='w-75 m-auto'>
                <div className='d-flex justify-content-between'>
                    <input placeholder='Full Name' type='text' />
                    <input placeholder='Email Adress' type='email' />
                </div>
                <div className='d-flex justify-content-between'>
                    <input  placeholder='Password' type = 'password' />
                    <input placeholder='Age' type='number' />
                </div>
                <div className='d-flex justify-content-between'>
                    <select className='select' name="lang" id="lang">
                        <option value="" disabled selected>Gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <input placeholder='Phone' type='text' />
                </div>


                <div className='d-flex justify-content-between'>
                    <input placeholder='Parent Phone' type='number' />
                    <input placeholder='Parent Email' type='email' />
                </div>
                <div className='d-flex justify-content-between'>
                    <input placeholder='city' type='text' />
                    <input placeholder='state' type='text' />
                </div>
                <div className='d-flex justify-content-between'>
                    <input placeholder='section' type='text' />
                    <input placeholder='grade' type='text' />
                </div>

            </form>
            <button className='btn-create-account'>Create Account</button>
            <p className='login w-50 ms-auto pb-4 pb-lg-0 d-flex'> 
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