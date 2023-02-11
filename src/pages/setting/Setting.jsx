import Navbar from "../../components/navbar/Navbar";
import SettingControls from "../../components/settingComponent/settingControls/SettingControls";
import Sidebar from "../../components/sidebar/Sidebar";
import Settinginfo from "../../components/settingComponent/settingInfo/Settinginfo";
import SettingSendData from "../../components/settingComponent/settingSendData/SettingSendData";
import Wrapper from "../../components/wrapper/Wrapper";
import React from "react";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import './settingPage.scss';


const Setting = () => {


    return (
        <section className="setting-page">
            <Sidebar />
            <Navbar />
            <Wrapper>
                <Settinginfo /> 
                <Contact/>
                <Footer />
            </Wrapper>            
        </section>
    )
}

export default React.memo(Setting);