import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbars from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import Wrapper from '../../components/wrapper/Wrapper';
import Contact from '../../components/contact/Contact';
import './flip.scss';

const CancilationPolicy = () => {
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
    <div className='flip-page'>
        <Sidebar />
        <Wrapper>
        <Navbars/>
        <Container>
        <ul className='my-5 list-unstyled'>
            <h3 className='my-4'>{t("refund-head")}</h3>
            <li>{t("refund-head1")}</li>
            <li className='my-3'>{t("refund-p1")}</li>
            <li className='my-3'>{t("refund-head2")}</li>
            <li className='my-3'>{t("refund-p2")}</li>
            <li className='my-3'>{t("refund-head3")}</li>
            <li className='my-3'>{t("refund-p3")}</li>
            <li className='my-3'>{t("refund-head4")}</li>
            <li className='my-3'>{t("refund-p4")}</li>
        </ul>
        </Container>
        <Contact />
        <Footer />
        </Wrapper>
    </div>
  );
};

export default CancilationPolicy;
