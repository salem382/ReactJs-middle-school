import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Homeinfo from '../../components/homeComponents/homeInfo/HomeInfo';
import Homeslider from '../../components/homeComponents/homeSlider/HomeSlider';
import OurHistory from '../../components/homeComponents/ourHistory/Ourhistory';
import StartConversion from '../../components/homeComponents/startConversition/StartConversion';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';
import { useSelector } from 'react-redux';


const Home = () => {

    const {openSidebar, sidebarWidth, screeSize} = useSelector(state => state.sidebarSlice);
    

    return (
        <>
            <Sidebar />
            <div style={{paddingLeft:openSidebar&& screeSize > 772 ?sidebarWidth : '0' ,
                transition:'all .3s ease-in-out'}}>
                <Navbar />
                <Homeslider />
                <Homeinfo />
                <OurHistory />
                <StartConversion />
                <Contact />
                <Footer />  
            </div>
        </>
    )
}

export default Home;
