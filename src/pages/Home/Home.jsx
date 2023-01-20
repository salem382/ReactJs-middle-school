import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Homeinfo from '../../components/homeComponents/homeInfo/HomeInfo';
import Homeslider from '../../components/homeComponents/homeSlider/HomeSlider';
import OurHistory from '../../components/homeComponents/ourHistory/Ourhistory';
import StartConversion from '../../components/homeComponents/startConversition/StartConversion';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.scss';



const Home = () => {

   
    return (
        <>
            <Navbar />
            <Sidebar />
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
