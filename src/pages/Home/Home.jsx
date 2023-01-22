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

const Home = () => {

  return (
    <>
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
    </>
  );
};

export default React.memo(Home);
