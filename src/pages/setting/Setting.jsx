import Navbar from "../../components/navbar/Navbar";
import SettingControls from "../../components/settingComponent/settingControls/SettingControls";
import Sidebar from "../../components/sidebar/Sidebar";
import Settinginfo from "../../components/settingComponent/settingInfo/Settinginfo";
import SettingSendData from "../../components/settingComponent/settingSendData/SettingSendData";
import Wrapper from "../../components/wrapper/Wrapper";
import React from "react";

const Setting = () => {

   
    return (
        <div>
            <Sidebar />
            <Navbar />
            <Wrapper>
                <SettingControls />
                <Settinginfo /> 
                <SettingSendData />
            </Wrapper>            
        </div>
    )
}

export default React.memo(Setting);