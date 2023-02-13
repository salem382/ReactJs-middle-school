import './loginform.scss';
import SocialSign from '../../signupComponent/socialSign/Socialsign';
import TopPartSignup from '../../signupComponent/topPartSignUp/TopPartSignup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {getUser} from '../../../store/CurrentUser';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import BtnReload from '../../btnReload/BtnReload';

const LoginForm = () => {

    const {t} = useTranslation();

    const dispatch = useDispatch();

    
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

            localStorage.setItem("newbrainsToken", data.access_token);
            navigate("/subjects");
            setIsPost(false);
            dispatch(getUser());
        }
        catch (error) {
            setIsPost(false);
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
            <SocialSign  head = {t("Welcom-back")}/>
             <form onSubmit={submitData}>
                <input onChange={(e) => postData(e)} name="email" placeholder={t("log-in-form-Email")} type='email' />
                <div className='position-relative m-auto w-75' >
                    <input onChange={(e) => postData(e)} name="password" className='w-100' placeholder={t("log-in-form-password")} type={'password'} />
                </div>
                <button className='btn-create-account'>
                    {isPost ? (
                            <>
                                <BtnReload/>   
                            </>
                        ) : <span>{t("log-in-form-button")}</span>}
                </button>
                <p className='text-danger'>{msg}</p>
            </form>
            <p className='login  d-flex'> 
            <span>{t("log-in-form-paragraph")} </span> 
                <span>
                <Link to='/signup' className='nav-link'>
                    {t("log-in-form-link")}
                </Link>
                </span>
            </p>
        
        </div>
    )
}

export default LoginForm;