import { Container, Row, Col } from 'react-bootstrap';
import SubjectActiveVideo from '../../components/subjectLessonsComponent/subjectActiveVideo/SubjectVideo';
import SubjectVideos from '../../components/subjectLessonsComponent/subjectVideos/SubjectVideos';
import SubjectControls from '../../components/subjectLessonsComponent/subjectControls/SubjectCobtrols';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Wrapper from '../../components/wrapper/Wrapper';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import './subjectlessons.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUnits} from '../../store/unitsSlice';
import { useEffect } from 'react';


const SubjectLessons = () => {

  
  const params = useParams();
  const dispatch = useDispatch();
  const {currentUnitsLessons, activeVideoIndex} = useSelector(state => state.units);

  useEffect (() => {

    dispatch(getUnits(params.id));

  },[])




  return (
    <section className='subject-lessons-page'>
      <Navbar />
      <Sidebar />
      <Wrapper>
        <Container className='mt-4'>
          <Row>
            <Col md={7}>
              <SubjectActiveVideo />
              <SubjectControls />
            </Col>
            <Col md={5}>
              {currentUnitsLessons.map((lesson, indx) =>  <SubjectVideos
               lessonIndx={indx} 
               key={indx} 
               lesson = {lesson} 
               active={activeVideoIndex === indx ? "active" : ""} />)}
  
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Contact />
        <Footer />
    </section>
  );
};

export default SubjectLessons;
