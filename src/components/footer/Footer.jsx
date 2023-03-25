import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faEnvira} from '@fortawesome/free-brands-svg-icons'
import {Container, Row, Col} from 'react-bootstrap'


const Footer = () => {

    return (
       
            <div className='py-2 footer'
                style={{background:'#EAEAEA'}}
            >
            <Container>
                <div className='footer-icon ms-auto d-flex justify-content-between'>
                        <img src='/imgs/footer/facebook.png'/>
                        <img src='/imgs/footer/linkedin.png'/>
                        <img src='/imgs/footer/gmail.png'/>
                        <img src='/imgs/footer/youtube.png'/>
                </div>
            </Container>
            </div>
        
    )
}

export default Footer;