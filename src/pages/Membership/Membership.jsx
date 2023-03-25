import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbars from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Sidebar from '../../components/sidebar/Sidebar';
import Wrapper from '../../components/wrapper/Wrapper';
import Contact from '../../components/contact/Contact';
import '../CancilationPolicy/flip.scss';

const Membership = () => {


    const { t } = useTranslation();


    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
    };


    useEffect(() => {
        scrollToTop();
    },[]);

    return (
        <section className='flip-page'>  
            <Sidebar />
            <Wrapper>
                <Navbars />
                    <Container >
                        <div className='my-5'>
                            <h3 className='my-3'>{t("membership-head")}</h3>
                            <p className='py-4'>{t("membership-p1")}</p>
                            <p className='py-4'>{t("membership-p2")}</p>
                        </div>
                    </Container>
                    <Contact />
                <Footer />
            </Wrapper>
        </section>
    )

}

export default Membership;