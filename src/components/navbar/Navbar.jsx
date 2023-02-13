import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faBell} from '@fortawesome/free-solid-svg-icons';
import {faRocketchat} from '@fortawesome/free-brands-svg-icons';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {setOpenSidebar} from '../../store/sidebarRouteSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useTransition } from 'react';
import {getUser} from '../../store/CurrentUser';
import TransationMenu from '../transationMenu/transationMenu';
import { useTranslation } from 'react-i18next';



const Navbar = () => {

    const {t} = useTranslation();

   const dispatch = useDispatch ();
   
   const {user} = useSelector(state =>state.userSlice)



    return (
        <Container fluid>
            <div className='navbar d-flex py-2 justify-content-between'>
                <div className='ps-2 ps-sm-0'
                    style={{width:"150px"}}
                >
                    <FontAwesomeIcon
                        style={{cursor: 'pointer' }}
                        onClick={() => dispatch(setOpenSidebar(true))}
                        className='fs-5 icon'
                        icon={faBars}
                    />
                </div>
                <div className='d-flex justify-content-end  w-75'>
                    <div className='d-flex align-items-center w-100 justify-content-end'>
                        {/* <span>
                            <FontAwesomeIcon className='fs-5 icon' icon={faRocketchat}/>
                        </span>
                        <span className='mx-4'>
                            <FontAwesomeIcon className='fs-5 icon' icon={faBell}/>
                        </span> */}

                        {
                            localStorage.getItem("newbrainsToken") ?(
                                <div style={{width:"50px", height:"50px"}} className='mx-4'>
                                    <img src={user.image ?user.image :'/imgs/navbar/user.webp'} alt='user-img' className='rounded-circle w-100 h-100'/>
                                </div>
                            ) : (
                                <Link to={'/login'} className="nav-link d-block">
                                <div className='nav-login text-center mx-4 px-4'>
                                    {t("log-in-form-header")}
                                </div>
                                </Link>
                            )
                        }
                        <div>
                            <TransationMenu />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar;
