import Navbar from "../../components/navbar/Navbar";
import Quiz from "../../components/quiz/Quiz";
import Sidebar from "../../components/sidebar/Sidebar";
import { useSelector } from 'react-redux';


const Test = () => {

    const {openSidebar, sidebarWidth, screeSize} = useSelector(state => state.sidebarSlice);

    return (
        <div>
            <Sidebar />
            <div style={{paddingLeft:openSidebar&& screeSize > 772 ?sidebarWidth : '0' ,
                transition:'all .3s ease-in-out'}}>
                <Navbar/>
                <Quiz />
            </div>
        </div>
    )
}

export default Test;