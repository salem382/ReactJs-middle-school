import './homeinfo.scss';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';



const Homeinfo = () => {



  const {t} = useTranslation();


  return (
    <Container>


    
      <div className='info'>
        <div className='info__img'>
          <img src='./imgs/home/people.png' alt='' />
        </div>
        <div  className='content'>
          <h1 className='content__header'>{t('home-info-title')}</h1>
          <p className='content__para'>{t('home-info-para')}</p>
          <ul className='features'>
            <li className='feature'>
              <div className='icon'>
                <img src='./imgs/home/clockIcon.png' alt='' />
              </div>
              <div className='title'>{t('home-info-feature-1-title')}</div>
              <div className='para'>{t('home-info-feature-1-para')}</div>
            </li>
            <li className='feature'>
              <div className='icon'>
                <img src='./imgs/home/peopleIcon.png' alt='' />
              </div>
              <div className='title'> {t('home-info-feature-2-title')}</div>
              <div className='para'>{t('home-info-feature-2-para')}</div>
            </li>
            <li className='feature'>
              <div className='icon'>
                <img src='./imgs/home/enjoyIcon.png' alt='' />
              </div>
              <div className='title'> {t('home-info-feature-3-title')}</div>
              <div className='para'>{t('home-info-feature-3-para')}</div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Homeinfo;
