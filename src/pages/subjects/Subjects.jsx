import './subjects.scss';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import SubjectHero from '../../components/subjectsComponent/subjectHero/subjectHero';
import Subjectsearch from '../../components/subjectsComponent/subjectSearch/subjectsearch';
import StudyMaterial from '../../components/subjectsComponent/studyMaterial/studyMaterial';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import { useSelector } from 'react-redux';

const Subjects = () => {
  const { openSidebar, sidebarWidth, screeSize } = useSelector(
    (state) => state.sidebarSlice
  );

  return (
    <>
      <Sidebar />
      <div
        style={{
          paddingLeft: openSidebar && screeSize > 772 ? sidebarWidth : '0',
          transition: 'all .3s ease-in-out',
        }}
      >
        <Navbar />
        <SubjectHero />
        <Subjectsearch />
        <StudyMaterial />
        <Footer />
      </div>
    </>
  );
};

export default Subjects;
