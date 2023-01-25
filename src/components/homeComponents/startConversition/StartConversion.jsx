import './startconversion.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const StartConversion = () => {
  return (
    <Container>
      <div className='conv'>
        <h1 className='title'>Let’s Start a Conversation</h1>
        <form>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Name'
          />
          <input
            className='form-input'
            type='text'
            name='phone'
            placeholder='Phone'
          />
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Email'
          />
          <textarea
            className='form-input'
            name='message'
            placeholder='Message'
          ></textarea>
          <button className='action'>
            Send <img src='./imgs/home/rightArrow.png' alt='' />
          </button>
        </form>
      </div>
    </Container>
  );
};

export default StartConversion;
