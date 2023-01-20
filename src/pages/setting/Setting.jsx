import Navbar from "../../components/navbar/Navbar";
import SettingControls from "../../components/settingComponent/settingControls/SettingControls";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from "react-redux";
const Setting = () => {

    const {openSidebar, sidebarWidth} = useSelector(state => state.sidebarSlice);

    return (
        <div>
            <Sidebar />
            <div style={{paddingLeft:openSidebar ?sidebarWidth : '0' ,
                transition:'all .3s ease-in-out'}}>
                <Navbar />
                <SettingControls />
            </div>
        </div>
    )
}

export default Setting;