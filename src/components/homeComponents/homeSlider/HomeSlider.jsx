import './homeslider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

const Homeslider = () => {
  return (
    <div
      className='banner'
      style={{
        background: 'url("./imgs/home/BannerBK.png") no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <h1 className='banner__header--l1'>Learn a ton while</h1>
      <h1 className='banner__header--l2'>having fun</h1>
      <p className='banner__para'>
        Forget the old rules. You can have the best <br></br> learn . Right now.
        Right here.
      </p>
      <button className='btn-solid'>Join for Free</button>
      <button className='btn-outline'>Log In</button>
    </div>
  );
};

export default Homeslider;
