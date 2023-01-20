import './teachers.scss';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Teacherslider from '../../components/teachersComponent/teacherslider/Teacherslider';
import Teachersearch from '../../components/teachersComponent/teacherSearch/Teachersearch';
import Teacherpersons from '../../components/teachersComponent/teacherPersons/TeacherPerson';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';

const Teachers = () => {

    const {openSidebar, sidebarWidth, screeSize} = useSelector(state => state.sidebarSlice);
    
    return (
        <>
            <Sidebar/>
            <div style={{paddingLeft:openSidebar && screeSize > 772 ?sidebarWidth : '0' ,
                transition:'all .3s ease-in-out'}}>
            <Navbar/>
            <Teacherslider/>
            <Teachersearch />
            <Teacherpersons />
            <Contact />
            <Footer/>
            </div>
        </>
    )
}

export default Teachers;