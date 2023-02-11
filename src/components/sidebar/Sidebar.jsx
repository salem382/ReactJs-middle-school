import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faBookOpen,
  faUser,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import Logo from '../newBrainsLogo/Logo';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenSidebar } from '../../store/sidebarRouteSlice';
import { useTranslation } from 'react-i18next';


const Sidebar = () => {

  const {t} = useTranslation();
  const dispatch = useDispatch();
  const { openSidebar, screeSize } = useSelector((state) => state.sidebarSlice);
  const { lang } = useSelector((state) => state.currentLang);

  return (

    <>
      <section
      className='position-fixed w-100 h-100 top-0 start-0'
      style={{display:openSidebar && screeSize < 992 ? "block" : "none",zIndex:'99',
      background : "rgba(0, 0, 0, 0.3)"}}
      onClick = {() =>dispatch(setOpenSidebar(false))}
      ></section>
      <div style={lang == "en" ? { left: openSidebar ? '0' : "-300px", width:"300px", top:"0"} : 
            {right:openSidebar ? '0' :  "-300px", width:"300px", top:"0"}} className='sidebar'>
        <div className='m-auto w-75 mt-3'>
          <Link to="/">
            <Logo src={'/imgs/sidebar/logo.png'} name = 'logo' />
          </Link>
        </div>
        <ul className='list-unstyled mt-4 m-auto mb-5'
          style={{width:"80%"}}
        >
          <li>
            <NavLink 
            style={{
              textDecoration:"none",
              }}
              className={({ isActive }) =>
              isActive ? "active-item" : "unactive-item "
            }
            to='/'>
              <FontAwesomeIcon icon={faHouse} className='mx-3' />
              <span>{t("sidebar-home")}</span> 
            </NavLink>
          </li>
          <li>
            <NavLink 
              style={{
                textDecoration:"none",
                }}
              className={({ isActive }) =>
              isActive ? "active-item" : "unactive-item "
              }
              to='/teachers'
            >
              
                <FontAwesomeIcon icon={faEnvira} className='mx-3' />
                <span>{t("sidebar-teachers")}</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink 
              style={{
                textDecoration:"none",
                }}
              className={({ isActive }) =>
              isActive ? "active-item" : "unactive-item "
              }
              to='/subjects'
            >
                <FontAwesomeIcon icon={faBookOpen} className='mx-3' />
                <span>{t("sidebar-subkects")}</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink 
              style={{
                textDecoration:"none",
                }}
              className={({ isActive }) =>
              isActive ? "active-item" : "unactive-item "
              }
              to='/account'
            >
                <FontAwesomeIcon icon={faUser} className='mx-3' />
                <span>{t("sidebar-account")}</span>
            
            </NavLink>
          </li>
        </ul>
        <div className='pro' style={{ marginLeft: '12px' }}>
          <h5>{t("sidebar-upgrade-header")}</h5>
          <p>
          {t("sidebar-pargraph-part1")} <br />
          {t("sidebar-pargraph-part2")}
          </p>
          <div className='try-btn'>{t("sidebar-try")}</div>
          <img className='rocket' src='/imgs/sidebar/rocket0.png' alt='rocket' />
        </div>
        <div className='sett-btn' style={{width:"80%"}}>
          <NavLink 
            style={{
              textDecoration:"none",
              }}
            className={({ isActive }) =>
            isActive ? "active-item" : "unactive-item"
            }
            to='/setting'
          >
            <FontAwesomeIcon icon={faGear} className='mx-4' />
            <span>{t("sidebar-setting")}</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
