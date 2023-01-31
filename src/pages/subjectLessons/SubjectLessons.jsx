import { Container, Row, Col } from 'react-bootstrap';
import SubjectActiveVideo from '../../components/subjectLessonsComponent/subjectActiveVideo/SubjectVideo';
import SubjectVideos from '../../components/subjectLessonsComponent/subjectVideos/SubjectVideos';
import SubjectControls from '../../components/subjectLessonsComponent/subjectControls/SubjectCobtrols';

const SubjectLessons = () => {
  return (
    <section>
      <Container>
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
    </section>
  );
};

export default SubjectLessons;
