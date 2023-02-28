import './signup.scss';
import Socialsign from '../socialSign/Socialsign';
import {Link} from 'react-router-dom';
import TopPartSignup from '../topPartSignUp/TopPartSignup';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import BtnReload from '../../btnReload/BtnReload';



const SignUpForm = () => {

    const {t} = useTranslation();
    
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
            <Socialsign head ={t("sign-up-form-button")} />
            <form onSubmit={(e) => submitData(e)} className='w-75 m-auto'>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder={t("sign-up-form-first-name")} name='name' type='text'/>
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.name && errArr.name[0]}</div>
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder={t("sign-up-form-Email")} name='email' type='email'/>
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.email && errArr.email[0]}</div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)}  placeholder={t("sign-up-form-password")} name='password' type = 'password' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.password && errArr.password[0]}</div>
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder={t("sign-up-form-age")} name='age' type='number' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.age && errArr.age[0]}</div>    
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                    <select onChange={(e) => postData(e)} className='select' name="gender" id="dsf" defaultValue="">
                        <option value="" disabled hidden>{t("sign-up-form-gender")}</option>
                        <option value="male">{t("sign-up-form-gender-male")}</option>
                        <option value="female">{t("sign-up-form-gender-female")}</option>
                    </select>

                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.gender && errArr.gender[0]}</div>    
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)}  placeholder={t("sign-up-form-phone")} name='phone' type='text' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.phone && errArr.phone[0]}</div>       
                    </div>
                </div>


                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder={t("sign-up-form-parent-phone")}  name='parent_phone'  type='number' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.parent_phone && errArr.parent_phone[0]}</div>        
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder={t("sign-up-form-last-name")}  name='parent_email' type='email' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.parent_email && errArr.parent_email[0]}</div>    
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder={t("sign-up-form-city")} name='city' type='text' />
                        <div className='text-danger' style={{height:"20px", fontSize:"14px"}}>{errArr.city && errArr.city[0]}</div>        
                    </div>
                    <div className='w-50'>
                        <input onChange={(e) => postData(e)} placeholder={t("sign-up-form-state")} name='state' type='text' />
                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.state && errArr.state[0]}</div>       
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                    <select onChange={(e) => postData(e)} className='select' name="section" defaultValue="">
                        <option value="" disabled hidden>{t("sign-up-form-section")}</option>
                        <option value="public">{t("sign-up-form-section-public")}</option>
                        <option value="language">{t("sign-up-form-section-language")}</option>
                    </select>

                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.section && errArr.section[0]}</div>        
                    </div>
                    <div className='w-50'>
                    <select onChange={(e) => postData(e)} className='select' name="grade" defaultValue="">
                        <option value="" disabled hidden>{t("sign-up-form-grade")}</option>
                        <option value="first">{t("sign-up-form-grade-first")}</option>
                        <option value="second">{t("sign-up-form-grade-second")}</option>
                        <option value="third">{t("sign-up-form-grade-third")}</option>
                    </select>

                        <div className='text-danger'style={{height:"20px", fontSize:"14px"}}>{errArr.grade && errArr.grade[0]}</div>    
                    </div>
                </div>
                <button className='btn-create-account py-2'>
                    {isPost ? (
                        <>
                            <BtnReload />  
                        </>
                    ) : <span>{t("sign-up-form-button")}</span>}
                </button>
                <p className='text-danger m-0'
                   style={{
                    height:"20px",
                    fontSize:"14px"    
                }} 
                >{msg}</p>
            </form>
            <p className='login w-50 ms-auto pb-4 mt-3 mt-md-0 pb-lg-0 d-flex'> 
                <span>{t("sign-up-form-paragraph")}</span> 
                <span>
                <Link to='/login' className='nav-link'>
                    {t("sign-up-form-link")}
                </Link>
                </span>
            </p>
        </section>
    )
}

export default SignUpForm;