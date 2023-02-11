import Logo from '../../newBrainsLogo/Logo';
import './topbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import TranslationMenu from '../../transationMenu/transationMenu';
const TopPartSignup = () => {

    const navgiation = useNavigate();

    return (
        <div className='top-part  px-5 d-flex justify-content-between align-items-center'>
            <div role="button" onClick = {() => navgiation("/")}>
                <Logo src="./imgs/sign/gp.png" name="logo"/>
            </div>
            <div className='position-relative pt-3'>
                <TranslationMenu />
            </div>
        </div>
    )
}

export default TopPartSignup;
