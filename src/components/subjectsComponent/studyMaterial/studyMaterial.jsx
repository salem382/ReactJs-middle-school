import { Container , Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './studyMaterial.scss';
import {setCurrentSubject} from '../../../store/currentSubjectSlice';
import { useDispatch } from 'react-redux';




const StudyMaterial = ({subjects}) => {

  const dispatch = useDispatch();


  return (
    <Container>
      <Row>
          {subjects.map(subject => <Col md={3} key={subject._id} className='mt-5'>
           <div className='material'>
              <img
                className='material-img w-100'
                src={'http://localhost:5000/' + subject.image}
                alt=''
                style={{height:"120px"}}
              />
              <div className='text-center'>
                <p className='name mb-0 mt-2' style={{textTransform:'capitalize'}}>Subject : {subject.name}</p>
                <p style={{textTransform:'capitalize'}}>Teacher:{subject.teacherName}</p>
                <div className='d-flex justify-content-between'>
                  <Link to={`/lessons/${subject._id}`} onClick={() => dispatch(setCurrentSubject(subject.name))}  className='nav-link d-block w-100'>
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
