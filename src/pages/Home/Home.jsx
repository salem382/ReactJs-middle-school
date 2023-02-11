import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Homeinfo from '../../components/homeComponents/homeInfo/HomeInfo';
import Homeslider from '../../components/homeComponents/homeSlider/HomeSlider';
import OurHistory from '../../components/homeComponents/ourHistory/Ourhistory';
import StartConversion from '../../components/homeComponents/startConversition/StartConversion';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Wrapper from '../../components/wrapper/Wrapper';
import React from 'react';
import './home.scss';


const Home = () => {

  return (
    <section className='home-page'>
      <Sidebar />
      <Navbar />
      <Wrapper>
        <Homeslider />
        <Homeinfo />
        <OurHistory />
        <StartConversion />
        <Contact />
        <Footer />
      </Wrapper>
    </section>
  );
};

export default React.memo(Home);
