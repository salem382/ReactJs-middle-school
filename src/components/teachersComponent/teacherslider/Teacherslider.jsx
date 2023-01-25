import './teacherslider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const Teacherslider = () => {
  return (
    <Container>
      <div
        className='teacher-header'
        style={{
          background:
            'url("./imgs/teachers/sectionImg.png") no-repeat, linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(.jpg)',
          backgroundSize: 'cover',
        }}
      >
        <h1 className='title'>Our Teachers</h1>
      </div>
    </Container>
  );
};

export default Teacherslider;
