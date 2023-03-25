import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './teacherpersons.scss';

const Teacherpersons = ({teachers}) => {



  return (
    <Container>
      <div className='teachers mt-5'>
        {teachers.map(teacher=> <div className='teacher' key={teacher._id}>
          <img src={'http://localhost:5000/' + teacher.image} alt=''
          style={{height:"200px"}}
          />
          <h4 className='name'>Mr. {teacher.name}</h4>
          <span className='school'>subject :{teacher.subject}</span> <br/>
          <span className='school'> grade :{teacher. grade}</span>
        </div>)}
      </div>
    </Container>
  );
};

export default Teacherpersons;
