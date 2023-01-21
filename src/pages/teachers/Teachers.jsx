import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Teacherslider from '../../components/teachersComponent/teacherslider/Teacherslider';
import Teachersearch from '../../components/teachersComponent/teacherSearch/Teachersearch';
import Teacherpersons from '../../components/teachersComponent/teacherPersons/TeacherPerson';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Wrapper from '../../components/wrapper/Wrapper';
import React from 'react';

const Teachers = () => {

    return (
        <>
            <Sidebar/>
            <Wrapper>
                <Navbar/>
                <Teacherslider/>
                <Teachersearch />
                <Teacherpersons />
                <Contact />
                <Footer/>
            </Wrapper>
        </>
    )
}

export default React.memo(Teachers);