import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';
import Logo from '../newBrainsLogo/Logo';
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const {t} = useTranslation();

    return (
        <section className='py-4 mt-5'
            style={{background:'#F3F3F3'}}
        >

           <Container>
                <Row>
                    <Col className='col-12'>
                        <div className='logo-container' style={{width:"170px"}}>
                            <Logo src={"/imgs/sidebar/logo.png"} />
                        </div>
                    </Col>
                    <Col md = {6} >
                        <div>
                            <p className='mt-4 lh-lg'
                                style={{color:"#9E988F"}}
                            >
                                   {t("footer-logo-para")}
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
                                    <p className='mx-3'>{t("footer-contact")}</p>
                                </div>
                                <p >{t("footer-number")}</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex'>
                                    <FontAwesomeIcon className='mt-1' icon={faLocationDot}/>
                                    <p className='mx-3'>{t("footer-location")}</p>
                                </div>
                                <p 
                                
                                >{t("footer-location%")}</p>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div className='d-flex'>
                                    <FontAwesomeIcon className='mt-1' icon={faEnvelope}/>
                                    <p className='mx-3'>{t("footer-email")}</p>
                                </div>
                                <p>{t("footer-email%")}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
           </Container>
        </section>
    )
}

export default Contact;