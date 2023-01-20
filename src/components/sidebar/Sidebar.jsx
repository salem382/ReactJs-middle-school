import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faBookOpen, faFile, faUser, faGear} from '@fortawesome/free-solid-svg-icons';
import {faEnvira} from '@fortawesome/free-brands-svg-icons'
import Logo from '../newBrainsLogo/Logo';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {setOpenSidebar} from '../../store/sidebarRouteSlice';
import { useState, useEffect } from 'react';

const Sidebar = () => {

    const dispatch = useDispatch();
    const {openSidebar} = useSelector (state => state.sidebarSlice);
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth
        })
      }
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        screenSize.dynamicWidth <= 992 ? dispatch(setOpenSidebar(false)) : dispatch(setOpenSidebar(true));
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])

    return (
        <div style={{left : openSidebar ? '0' : '-300px'}}
         className='sidebar'
        >
            <Logo />
            <ul className='list-unstyled mt-4'>
                <Link to ='/' className='nav-link'>
                <li>
                   <FontAwesomeIcon icon={faHouse} className='me-3'
                   /> 
                   <span>Home</span>
                </li>
                </Link>
                <Link to ='/teachers' className='nav-link'>
                <li>
                   <FontAwesomeIcon icon={faEnvira} className='me-3'
                   /> 
                    <span>Teatchers</span>
                   
                </li>
                </Link>
                <li>
                   <FontAwesomeIcon icon={faBookOpen} className='me-3'
                   /> 
                   <span>Subjects</span>
                </li>
                <li>
                   <Link to ='/test' className='nav-link'>
                   <FontAwesomeIcon icon={faFile} className='me-3'
                   /> 
                   <span>Test</span>
                   </Link>
                </li>
                <li>
                   <FontAwesomeIcon icon={faUser} className='me-3'
                   /> 
                   <span>Account</span>
                </li>
            </ul>
            <div className='pro' style={{marginLeft:'12px'}}>
                <h5>Upgrade to pro</h5>
                <p>
                    Unlock premium <br/>
                    features for free.
                </p>
                <div className='try-btn'>TRY NOW</div>
                <img className='rocket' src='./imgs/rocket0.png' alt='rocket'/>
            </div>
            <div className='sett-btn'>
                <Link to ='/setting' className='nav-link'>
                   <FontAwesomeIcon icon={faGear} className='me-3'
                   /> 
                   <span>Setting</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;