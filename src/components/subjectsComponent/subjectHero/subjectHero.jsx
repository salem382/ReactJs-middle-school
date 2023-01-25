import { Container } from 'react-bootstrap';
import './subjectHero.scss';

const SubjectHero = () => {
  return (
    <Container>
      <div
        className='subjects-header'
        style={{
          background: 'url("./imgs/subjects/subjectImg.png") no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h1 className='title'>
          <span>Learn a ton while</span>
          <span>having fun</span>
        </h1>
      </div>
    </Container>
  );
};

export default SubjectHero;
