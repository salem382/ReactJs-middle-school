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

const SubjectLessons = () => {
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
              <SubjectVideos />
              <SubjectVideos />
              <SubjectVideos />
              <SubjectVideos />
              <SubjectVideos />
            </Col>
          </Row>
        </Container>
        <Contact />
        <Footer />
      </Wrapper>
    </section>
  );
};

export default SubjectLessons;
