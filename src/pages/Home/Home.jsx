import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Homeinfo from '../../components/homeComponents/homeInfo/HomeInfo';
import Homeslider from '../../components/homeComponents/homeSlider/HomeSlider';
import OurHistory from '../../components/homeComponents/ourHistory/Ourhistory';
import StartConversion from '../../components/homeComponents/startConversition/StartConversion';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';
import { useState } from 'react';


const Home = () => {

    const [openSidebar, setOpenSidebar] = useState(false);
    const setOpenSidebarFun = (x) => {setOpenSidebar(x)}
    return (
        <>
         <Navbar setOpenSidebarFun= {setOpenSidebarFun} />
    <Sidebar openSidebar= {openSidebar} setOpenSidebarFun= {setOpenSidebarFun}/>
            <Homeslider />
            <Homeinfo />
            <OurHistory />
            <StartConversion />
            <Contact />
            <Footer />  
        </>
    )
}

export default Home;
