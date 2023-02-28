import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Teacherslider from '../../components/teachersComponent/teacherslider/Teacherslider';
import Teacherpersons from '../../components/teachersComponent/teacherPersons/TeacherPerson';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Wrapper from '../../components/wrapper/Wrapper';
import React from 'react';
import './teachers.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import PageReload from '../../components/pageReload/PageReload';


const Teachers = () => {

    const [teachers, setTeachers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    
     
  const getAllTeachers = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
        const {data} = await axios.get ("https://newbrainsmiddle.com/api/getAllTeachers");
        setTeachers([...data.result]);
        console.log (data);
    }
    catch (error) {
    console.log (error)
    setIsError(true);
    }
    setIsLoading(false);

    }

    useEffect (() => {

        getAllTeachers ();
    }, [])



    return (
        <section className='teachers-page'>
            <Sidebar/>
            <Navbar/>
            <Wrapper>
                <Teacherslider/>
                {isLoading ? <PageReload /> :isError?
                    <div className='text-danger fs-5 fw-bold my-4'>Error occurred while fetching data</div> 
                    :teachers.length === 0 ?<div className=' fs-5 fw-bold my-4'>No teachers found</div> :  <Teacherpersons teachers = {teachers}/>}
                <Contact />
                <Footer/>
            </Wrapper>
        </section>
    )
}

export default React.memo(Teachers);