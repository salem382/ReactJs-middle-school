import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SubjectHero from '../../components/subjectsComponent/subjectHero/subjectHero';
import StudyMaterial from '../../components/subjectsComponent/studyMaterial/studyMaterial';
import Footer from '../../components/footer/Footer';
import Wrapper from '../../components/wrapper/Wrapper';
import React from 'react';
import Contact from '../../components/contact/Contact';
import './subjectPage.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PageReload from '../../components/pageReload/PageReload';


const Subjects = () => {



  const [Subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const dataFetch = async () => {

    setIsLoading(true);
    setIsError(false);
    try {
      const {data} = await axios.get(
        "http://localhost:5000/subject",
        {
          headers: {
            token: `${localStorage.getItem("newbrainsToken")}`,
          },
        }
      );

      setSubjects([...data.subjects])
      console.log (data.subjects);

    }
    catch (error) {
      console.log (error)
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    dataFetch();
  }, []);


 
  return (
    <section className='subject-page'>
      <Sidebar />
      <Navbar />
      <Wrapper>
        <SubjectHero />
        {isLoading ? <PageReload /> :isError?
         <div className='text-danger fs-5 fw-bold my-4 w-50 m-auto'>Error occurred while fetching data</div> 
         :Subjects.length === 0 ?<div className=' fs-5 fw-bold my-4 w-50 m-auto'>No Subjects found</div> : <StudyMaterial subjects={Subjects} /> }
        <Contact />
        <Footer />
      </Wrapper>
    </section>
  );
};

export default React.memo(Subjects);

