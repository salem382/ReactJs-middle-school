import './teacherseach.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const Teachersearch = () => {
  return (
    <div className='search'>
      <button className='filter-btn'>All</button>
      <div className='filter-icon'>
        <img src='./imgs/teachers/filterIcon.png' alt='' />
      </div>
      <div className='search-input'>
        <img src='./imgs/teachers/searchIcon.png' alt='' />
        <input type='text' placeholder='Search' />
      </div>
    </div>
  );
};

export default Teachersearch;
