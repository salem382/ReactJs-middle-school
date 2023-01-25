import './signup.scss';
import Socialsign from '../socialSign/Socialsign';
import {Link} from 'react-router-dom';
import TopPartSignup from '../topPartSignUp/TopPartSignup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from "axios";
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';


const SignUpForm = () => {

    
    const navigate = useNavigate();
    const [isPost, setIsPost] = useState (false);
    const [errArr, setErrArr] = useState({});
    const [msg, setMsg] = useState('');
    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        gender:"",
        age:"",
        parent_phone:"",
        parent_email:"",
        city: "",
        state:"",
        section:"",
        grade:""
    });


    const postData = (e) => {
        let usr = {...userData};
        usr[e.target.name] = e.target.value;
        setUserData({...usr})
    }

    const getData = async() => {
        setIsPost(true);
        try {
            const {data} = await axios.post('https://newbrainsmiddle.com/api/auth/userRegister',userData)
           navigate('/login');
        }
        catch (error) {
            setIsPost(false);
            error.response.data.message ?  setMsg("This Email is Already Registed use Another One"):
            setErrArr({...JSON.parse(error.response.data)});
        }
    }

    const submitData = async (e) => {
        e.preventDefault();
        getData();
    }

    return (
        <section className='signup-form'>
            <TopPartSignup />
            <Socialsign head ={'Create Account'} />
            <form onSubmit={(e) => submitData(e)} className='w-75 m-auto'>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder='Full Name' name='name' type='text'/>
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.name && errArr.name[0]}</div>
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder='Email Adress' name='email' type='email'/>
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.email && errArr.email[0]}</div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)}  placeholder='Password' name='password' type = 'password' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.password && errArr.password[0]}</div>
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder='Age' name='age' type='number' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.age && errArr.age[0]}</div>    
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <select onChange={(e) => postData(e)} className='select' name="gender" id="dsf">
                            <option value="" disabled selected>Gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.gender && errArr.gender[0]}</div>    
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder='Phone' name='phone' type='text' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.phone && errArr.phone[0]}</div>       
                    </div>
                </div>


                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder='Parent Phone'name='parent_phone'  type='number' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.parent_phone && errArr.parent_phone[0]}</div>        
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder='Parent Email' name='parent_email' type='email' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.parent_email && errArr.parent_email[0]}</div>    
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder='city' name='city' type='text' />
                        <div className='text-danger' style={{height:"20px", fontSize:"14px"}}>{errArr.city && errArr.city[0]}</div>        
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder='state' name='state' type='text' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.state && errArr.state[0]}</div>       
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <select onChange={(e) => postData(e)} className='select' name="section">
                            <option value="" disabled selected>section</option>
                            <option value="language">language</option>
                            <option value="public">public</option>
                        </select>
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.section && errArr.section[0]}</div>        
                    </div>
                    <div className='w-50'>
                        <select onChange={(e) => postData(e)} className='select' name="grade">
                            <option value="" disabled selected>grade</option>
                            <option value="first">first</option>
                            <option value="second">second</option>
                            <option value="third">third</option>
                        </select>
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.grade && errArr.grade[0]}</div>    
                    </div>
                </div>
                <button className='btn-create-account py-2'>
                    {isPost ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>
                             Loading ...   
                        </>
                    ) : ("Create Account")}
                </button>
                <p className='text-danger m-0'
                   style={{
                    height:"20px",
                    fontSize:"14px"    
                }} 
                >{msg}</p>
            </form>
            <p className='login w-50 ms-auto pb-4 mt-3 mt-md-0 pb-lg-0 d-flex'> 
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