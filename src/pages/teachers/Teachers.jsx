import './teachers.scss';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Teacherslider from '../../components/teachersComponent/teacherslider/Teacherslider';
import Teachersearch from '../../components/teachersComponent/teacherSearch/Teachersearch';
import Teacherpersons from '../../components/teachersComponent/teacherPersons/TeacherPerson';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';

const Teachers = () => {

    
    const [openSidebar, setOpenSidebar] = useState(false);
    const setOpenSidebarFun = (x) => {setOpenSidebar(x)}
    return (
        <>
            <Navbar setOpenSidebarFun= {setOpenSidebarFun} />
            <Sidebar openSidebar= {openSidebar} setOpenSidebarFun= {setOpenSidebarFun}/>
            <Teacherslider/>
            <Teachersearch />
            <Teacherpersons />
            <Contact />
            <Footer/>
        </>
    )
}

export default Teachers;