import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SubjectHero from '../../components/subjectsComponent/subjectHero/subjectHero';
import Subjectsearch from '../../components/subjectsComponent/subjectSearch/subjectsearch';
import StudyMaterial from '../../components/subjectsComponent/studyMaterial/studyMaterial';
import Footer from '../../components/footer/Footer';
import Wrapper from '../../components/wrapper/Wrapper';
import React from 'react';
import Contact from '../../components/contact/Contact';
import SubjectLessons from '../subjectLessons/SubjectLessons';
import './subjectPage.scss';



const Subjects = () => {
 
  return (
    <section className='subject-page'>
      <Sidebar />
      <Navbar />
      <Wrapper>
        <SubjectHero />
        <StudyMaterial />
        <Contact />
        <Footer />
      </Wrapper>
    </section>
  );
};

export default React.memo(Subjects);
