import React from 'react';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Terms from '../../components/terms/Terms';
import Wrapper from '../../components/wrapper/Wrapper';
import '../CancilationPolicy/flip.scss';


const TermsAndConditions = () => {
  return (
    <div className='flip-page'>
    <Sidebar />
    <Wrapper>
        <Navbar />
        <Terms />
        <Contact />
        <Footer />
    </Wrapper>
    </div>
  );
};

export default TermsAndConditions;
