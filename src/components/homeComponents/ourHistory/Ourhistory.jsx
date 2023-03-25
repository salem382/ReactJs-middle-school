import './ourhistory.scss';
import { Container} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


const OurHistory = () => {

  const {t} = useTranslation();


  return (
    <Container>
      <div className='history'>
        <div className='content'>
          <h1 className='header'>{t("home-history-title")}</h1>
          <p className='para' style={{fontSize:'16px'}}>
            {t("home-history-para")}
            {' '}
          </p>
        </div>
        <div className='video'>
          <div className='thumb'>
            <img src='./imgs/home/videoImg.png' alt='' />
            <img src='./imgs/home/playIcon.png' className='play-icon' alt='' />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurHistory;
