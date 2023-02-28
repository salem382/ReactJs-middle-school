import './startconversion.scss';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useRef } from 'react';
import BtnReload from '../../btnReload/BtnReload';
import {toast} from 'react-toastify' ;


const StartConversion = () => {

  const { t } = useTranslation();

  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const messageInput = useRef();

  const [isPost, setIsPost] = useState (false);
  const [userData, setUserData] = useState({
      name:"",
      email:"",
      phone:"",
      message:""
  });

  const clearData = () => {
      nameInput.current.value = "";
      emailInput.current.value = "";
      phoneInput.current.value = "";
      messageInput.current.value = "";
  }


  const postData = (e) => {
      let usr = {...userData};
      usr[e.target.name] = e.target.value;
      setUserData({...usr})
  }


  const getData = async() => {
      setIsPost(true);
      try {
          const {data} = await axios.get(`https://newbrainsmiddle.com/api/contactUs?name=${userData.name}&message=${userData.message}&phone=${userData.phone}&email=${userData.email}`,null, {
            params:{
              name:userData.name,
              message:userData.message,
              phone:userData.phone,
              email:userData.email
            }
          })
          clearData();
          setIsPost(false);
          toast.success(`Message Sent`,{position: 'bottom-right'});
      }
      catch (error) {
        console.log (error)
          setIsPost(false);
      }
  }

  const submitData = async (e) => {
      e.preventDefault();
      getData();
  }



  return (
    <Container>

      
      <div className='conv'>
        <h1 className='title'>{t("home-conv-title-main")}</h1>
        <form onSubmit={(e) =>submitData(e)}>
          <input
            onChange={(e) => postData(e)}
            className='form-input'
            type='text'
            name='name'
            placeholder={t("home-conv-form-name")}
          />
          <input
          onChange={(e) => postData(e)}
            className='form-input'
            type='text'
            name='phone'
            placeholder={t("home-conv-form-phone")}
          />
          <input
          onChange={(e) => postData(e)}
            className='form-input'
            type='email'
            name='email'
            placeholder={t("home-conv-form-email")}
          />
          <textarea
          onChange={(e) => postData(e)}
            className='form-input'
            name='message'
            placeholder={t("home-conv-form-message")}
          ></textarea>
           <button className='action'>
              {isPost ? <BtnReload/> : (<>
                <span> {t('home-conv-form-button')}</span>{' '}
                <img src='./imgs/home/rightArrow.png' alt='' />
              </>)}
            </button>
        </form>
      </div>
    </Container>
  );
};

export default StartConversion;
