import Logo from '../../newBrainsLogo/Logo';
import './topbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
const TopPartSignup = () => {

    return (
        <div className='top-part  px-5 d-flex justify-content-between'>
            <Logo src="./imgs/sign/gp.png" name="logo"/>
            <div className='position-relative pt-3'>
                <select className='select' name="lang" id="lang">
                    <option value="volvo">English(IN)</option>
                    <option value="saab">Arabic(AR)</option>
                </select>
                <FontAwesomeIcon icon={faCaretDown} className="fs-5 icon position-absolute"/>
            </div>
        </div>
    )
}

export default TopPartSignup;
