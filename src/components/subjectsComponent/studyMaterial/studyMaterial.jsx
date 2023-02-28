import { Container , Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './studyMaterial.scss';


//https://newbrainsmiddle.com

const StudyMaterial = ({subjects}) => {



  return (
    <Container>
      <Row>
          {subjects.map(subject => <Col md={3} key={subject.id} className='mt-5'>
           <div className='material'>
              <img
                className='material-img w-100'
                src='./imgs/subjects/materialImg.png'
                alt=''
                style={{height:"120px"}}
              />
              <div className='text-center'>
                <h6 className='name mb-3'>{subject.name}</h6>
                <div className='d-flex justify-content-between'>
                  <Link to={`/lessons/${subject.id}`} className='nav-link d-block w-100'>
                    <button className='action w-50 m-auto d-block m-0'>Start</button>
                  </Link>
                </div>
              </div>
         </div></Col>)}
      </Row>
    </Container>
  );
};

export default StudyMaterial;
