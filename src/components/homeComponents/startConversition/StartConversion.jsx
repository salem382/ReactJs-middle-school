import './startconversion.scss';
import { Container} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const StartConversion = () => {

  const {t} = useTranslation();


  return (
    <Container>

      
      <div className='conv'>
        <h1 className='title'>{t("home-conv-title-main")}</h1>
        <form>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder={t("home-conv-form-name")}
          />
          <input
            className='form-input'
            type='text'
            name='phone'
            placeholder={t("home-conv-form-phone")}
          />
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder={t("home-conv-form-email")}
          />
          <textarea
            className='form-input'
            name='message'
            placeholder={t("home-conv-form-message")}
          ></textarea>
          <button className='action'>
            <span>{t("home-conv-form-button")} </span><img src='./imgs/home/rightArrow.png' alt='' />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default StartConversion;
