import Logo from '../../newBrainsLogo/Logo';
import './topbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const TopPartSignup = () => {

    const navgiation = useNavigate();

    return (
        <div className='top-part  px-5 d-flex justify-content-between'>
            <div role="button" onClick = {() => navgiation("/")}>
                <Logo src="./imgs/sign/gp.png" name="logo"/>
            </div>
            <div className='position-relative pt-3'>
                <select className='select mt-1' name="lang" id="lang">
                    <option value="english">English(IN)</option>
                    <option value="arabic">Arabic(AR)</option>
                </select>
                <FontAwesomeIcon icon={faCaretDown} className="fs-5 mt-1 icon position-absolute"/>
            </div>
        </div>
    )
}

export default TopPartSignup;
