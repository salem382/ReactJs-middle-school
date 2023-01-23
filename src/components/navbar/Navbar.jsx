import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faBell} from '@fortawesome/free-solid-svg-icons';
import {faRocketchat} from '@fortawesome/free-brands-svg-icons';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {setOpenSidebar} from '../../store/sidebarRouteSlice'
import { useDispatch } from 'react-redux';

const Navbar = () => {

   const dispatch = useDispatch ();

    return (
        <Container>
            <div className='navbar d-flex py-2 justify-content-between'>
                <div className='ps-2 ps-sm-0'>
                    <FontAwesomeIcon
                        style={{cursor: 'pointer' }}
                        onClick={() => dispatch(setOpenSidebar(true))}
                        className='fs-5 icon'
                        icon={faBars}
                    />
                </div>
                <div className='d-flex align-items-center'>
                    <span>
                        <FontAwesomeIcon className='fs-5 icon' icon={faRocketchat}/>
                    </span>
                    <span className='mx-4'>
                        <FontAwesomeIcon className='fs-5 icon' icon={faBell}/>
                    </span>
                    <Link to={'/login'} className="nav-link">
                    <span className='nav-login text-center'>
                        Login
                    </span>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default Navbar;