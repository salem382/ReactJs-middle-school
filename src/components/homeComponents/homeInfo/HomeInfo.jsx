import './homeinfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const Homeinfo = () => {
  return (
    <Container>
      <div className='info'>
        <div className='info__img'>
          <img src='./imgs/home/people.png' alt='' />
        </div>
        <div className='content'>
          <h1 className='content__header'>
            Lorem ipsum dolor amet, consectetur{' '}
          </h1>
          <p className='content__para'>
            Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod
            tempor incididunt ut
          </p>
          <ul className='features'>
            <li className='feature'>
              <div className='icon'>
                <img src='./imgs/home/clockIcon.png' alt='' />
              </div>
              <div className='title'>Quiz after the lesson</div>
              <div className='para'>Lorem ipsum dolor sit amet</div>
            </li>
            <li className='feature'>
              <div className='icon'>
                <img src='./imgs/home/peopleIcon.png' alt='' />
              </div>
              <div className='title'>Many Teachers</div>
              <div className='para'>Lorem ipsum dolor sit amet</div>
            </li>
            <li className='feature'>
              <div className='icon'>
                <img src='./imgs/home/enjoyIcon.png' alt='' />
              </div>
              <div className='title'>Enjoy learning</div>
              <div className='para'>Lorem ipsum dolor sit amet</div>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Homeinfo;
