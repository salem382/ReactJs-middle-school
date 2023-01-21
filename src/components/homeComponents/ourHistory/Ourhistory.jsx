import './ourhistory.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const OurHistory = () => {
  return (
    <div className='history'>
      <div className='content'>
        <h1 className='header'>Our History</h1>
        <p className='para'>
          Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor
          incididunt ut labore Lorem ipsum dolor sit amet, consectetur dipiscing
          elit eius mod tempor incididunt ut laboreLorem ipsum dolor sit amet,
          consectetur dipiscing elit eius mod unt ut laboreLorem ipsum dolor sit
          amet, consectetur dipiscing elit eius mod unt ut laboreLorem ipsum
          dolor sit amet, co{' '}
        </p>
      </div>
      <div className='video'>
        <img src='./imgs/home/videoImg.png' alt='' />
        <img src='./imgs/home/playIcon.png' className='play-icon' alt='' />
      </div>
    </div>
  );
};

export default OurHistory;
