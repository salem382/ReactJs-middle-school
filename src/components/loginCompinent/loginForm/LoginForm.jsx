import './loginform.scss';
import SocialSign from '../../signupComponent/socialSign/Socialsign';
import TopPartSignup from '../../signupComponent/topPartSignUp/TopPartSignup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const LoginForm = () => {


    const [showPass, setShowPass] = useState(false);

    
    const navigate = useNavigate();
    const [isPost, setIsPost] = useState (false);
    const [msg, setMsg] = useState('');
    const [userData, setUserData] = useState({
        email:"",
        password:""
    });


    const postData = (e) => {
        let usr = {...userData};
        usr[e.target.name] = e.target.value;
        setUserData({...usr})
    }

    const getData = async() => {
        setIsPost(true);
        try {
            const {data} = await axios.post(`https://newbrainsmiddle.com/api/auth/userLogin`,null,{

                params: { email: userData.email, password: userData.password }
            }
            );

            console.log (data);

            localStorage.setItem("newbrainsToken", data.access_token);
            navigate("/");
            setIsPost(false);
        }
        catch (error) {
            setIsPost(false);
            console.log(error);
            error.response.data.message && setMsg(error.response.data.message);
        }
        
    }

    const submitData = async (e) => {
        e.preventDefault();
        getData();
    }


    return (
        <div className='loginform'>
            <TopPartSignup />
            <br/>
            <SocialSign  head = "Welcome Back"/>
             <form onSubmit={submitData}>
                <input onChange={(e) => postData(e)} name="email" placeholder='Email Adress' type='email' />
                <div className='position-relative m-auto w-75' >
                    <input onChange={(e) => postData(e)} name="password" className='w-100' placeholder='Password' type={showPass ? 'text' : 'password'} />
                    <FontAwesomeIcon onMouseUp={() =>setShowPass(false)} onMouseDown={() =>setShowPass(true)} className='position-absolute' style={{color:'#c1c1c1', right:"0", top:'20px', cursor:'pointer'}} icon={faEye}/>
                </div>
                <button className='btn-create-account'>
                    {isPost ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-3" role="status" aria-hidden="true"></span>
                                Loading ...   
                            </>
                        ) : ("Login")}
                </button>
                <p className='text-danger'>{msg}</p>
            </form>
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