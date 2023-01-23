import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';
import Logo from '../newBrainsLogo/Logo';


const Contact = () => {

    return (
        <section className='py-4 mt-5'
            style={{background:'#F3F3F3'}}
        >
           <Container>
                <Row>
                    <Col className='col-12'>
                        <div className='logo-container'>
                            <Logo src={"/imgs/sidebar/logo.png"} />
                        </div>
                    </Col>
                    <Col md = {6} >
                        <div>
                            <p className='mt-4 lh-lg'
                                style={{color:"#9E988F"}}
                            >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                            </p>
                        </div>
                    </Col>
                    <Col md = {6} >
                        <div className='left-part mt-3'
                        style={{color:'#515151'}} 
                        >
                            <div className='d-flex align-items-center'>
                                <div className='d-flex'>
                                    <FontAwesomeIcon className='mt-1' icon={faPhoneVolume}/>
                                    <p className='ms-3'>Contact</p>
                                </div>
                                <p className='ms-3'>+20 100 298 2946</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex'>
                                    <FontAwesomeIcon className='mt-1' icon={faLocationDot}/>
                                    <p className='ms-3'>Location</p>
                                </div>
                                <p className='ms-3'
                                
                                >9, 6Octobr st, ain shams, Cairo, Egypt</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex'>
                                    <FontAwesomeIcon className='mt-1' icon={faEnvelope}/>
                                    <p className='ms-3'>Email</p>
                                </div>
                                <p className='ms-3'>Contact@newbrains-eg.com</p>
                            </div>
                        </div>
                    </Col>
                </Row>
           </Container>
        </section>
    )
}

export default Contact;