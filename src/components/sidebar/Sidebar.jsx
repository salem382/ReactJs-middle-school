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
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenSidebar } from '../../store/sidebarRouteSlice';


const Sidebar = () => {
  const dispatch = useDispatch();
  const { openSidebar, screeSize } = useSelector((state) => state.sidebarSlice);

  return (

    <>
      <section
      className='position-fixed w-100 h-100 top-0 start-0'
      style={{display:openSidebar && screeSize < 992 ? "block" : "none",zIndex:'99',
      background : "rgba(0, 0, 0, 0.3)"}}
      onClick = {() =>dispatch(setOpenSidebar(false))}
      ></section>
      <div style={{ left: openSidebar ? '0' : '-300px' }} className='sidebar'>
        <div className='w-75'>
          <Logo src={'/imgs/sidebar/logo.png'} name = 'logo' />
        </div>
        <ul className='list-unstyled mt-4'>
          <li>
            <NavLink 
            style={{
              textDecoration:"none",
              padding: "12px 60px 12px 12px",
              }}
              className={({ isActive }) =>
              isActive ? "active-item" : "unactive-item "
            }
            to='/'>
              <FontAwesomeIcon icon={faHouse} className='me-3' />
              <span>Home</span> 
            </NavLink>
          </li>
          <li>
            <NavLink 
              style={{
                textDecoration:"none",
                padding: "12px 50px 12px 12px",
                }}
              className={({ isActive }) =>
              isActive ? "active-item" : "unactive-item "
              }
              to='/teachers'
            >
              
                <FontAwesomeIcon icon={faEnvira} className='me-3' />
                <span>Teachers</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink 
              style={{
                textDecoration:"none",
                padding: "12px 50px 12px 12px",
                }}
              className={({ isActive }) =>
              isActive ? "active-item" : "unactive-item "
              }
              to='/subjects'
            >
                <FontAwesomeIcon icon={faBookOpen} className='me-3' />
                <span>Subjects</span>
              
            </NavLink>
          </li>
          <li>
            <NavLink 
              style={{
                textDecoration:"none",
                padding: "12px 50px 12px 12px",
                }}
              className={({ isActive }) =>
              isActive ? "active-item" : "unactive-item "
              }
              to='/account'
            >
                <FontAwesomeIcon icon={faUser} className='me-3' />
                <span>Account</span>
            
            </NavLink>
          </li>
        </ul>
        <div className='pro' style={{ marginLeft: '12px' }}>
          <h5>Upgrade to pro</h5>
          <p>
            Unlock premium <br />
            features for free.
          </p>
          <div className='try-btn'>TRY NOW</div>
          <img className='rocket' src='/imgs/sidebar/rocket0.png' alt='rocket' />
        </div>
        <div className='sett-btn'>
          <NavLink 
            style={{
              textDecoration:"none",
              padding: "12px 50px 12px 12px",
              }}
            className={({ isActive }) =>
            isActive ? "active-item" : "unactive-item "
            }
            to='/setting'
          >
            <FontAwesomeIcon icon={faGear} className='me-3' />
            <span>Setting</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
