import './homeslider.scss';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Homeslider = () => {


  const {t} = useTranslation();


  return (
    <Container>
      <div
        className='banner'
        style={{
          background: 'url("/imgs/home/BannerBK.png") no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className='banner__header--l1'>{t("Home-head1")}</h1>
        <h1 className='banner__header--l2'>{t("Home-head2")}</h1>
        <p className='banner__para'>
        {t("Home-pargraph1")} <br/>
        {t("Home-pargraph2")}
        </p>
        {localStorage.getItem("newbrainsToken") ? "" : (
          <div className='action'>
          <button className='btn-solid'>
             <Link to={'/signup'} className='nav-link'>
               {t("Home-Join-free")} 
             </Link>
           </button>
           <button className='btn-outline'>
           <Link to={'/login'} className='nav-link'>
             {t("Home-login")} 
           </Link>
           </button>
         </div>
        )}
      </div>
    </Container>
  );
};

export default Homeslider;
