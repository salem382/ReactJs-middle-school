import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import Navbars from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Contact from '../../components/contact/Contact';
import Sidebar from '../../components/sidebar/Sidebar';
import Wrapper from '../../components/wrapper/Wrapper';
import '../CancilationPolicy/flip.scss';

const ReturnPolicies = () => {
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
            <div style={{margin:'40px 0 200px 0'}} className='px-5'>
                <h3 className='my-4'>{t("return-head")}</h3>
                {t("return-policies")}
            </div>
            <Contact/>
            <Footer />
        </Wrapper>
    </div>
  );
};

export default ReturnPolicies;
