import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneVolume, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link , useLocation, useParams} from 'react-router-dom';

const Contact = () => {

    const location = useLocation();
    const params = useParams();

    const {t} = useTranslation();

    return (
        <section className='py-4'
            style={{background:'#F3F3F3', marginTop:location.pathname === `/lessons/${params.id}` ? '250px' : '100px' }}
        >

           <Container>
                <Row>
                    <Col md = {6} >
                        <div className='d-flex justify-content-around'>
                            <div>
                                <div className='d-flex'>
                                    <img src='/imgs/footer/MasterCard.png' style={{width:"75px"}} alt='master_card'/>
                                    <img src='/imgs/footer/visa.png' style={{width:"75px"}}  alt='master_card'/>
                                </div> 
                                <Link to={'/membership'} className='nav-link my-1'>
                                <p className='mt-3 polic'>{t("footer-member")}</p> 
                                </Link>  
                            </div>
                            <div className='policies text-center'>
                                <h3 className='footer-title'>{t("footer-policies")}</h3>
                                <Link to={'/terms'} className='nav-link my-1 polic'><span className='policies-item' >{t("terms-heading")}</span></Link> 
                                <Link to={'/privacypolicies'} className='nav-link my-1 polic'><span className='policies-item' >{t("privacy-heading")}</span></Link>
                                <Link to={'/returnpolicies'} className='nav-link my-1 polic'><span className='policies-item' >{t("Refund-heading")}</span></Link>
                                <Link to={'/CancilationPolicy'} className='nav-link my-1 polic'><span className='policies-item' >{t("Cancellation-heading")}</span></Link>
                            </div>    
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