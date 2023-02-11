import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './studyMaterial.scss';



const studyMaterial = () => {
  return (
    <Container>
      <div className='materials mt-5'>

        <Link to={'/lessons'} className='nav-link'>
        <div className='material'>
          <img
            className='material-img'
            src='./imgs/subjects/materialImg.png'
            alt=''
          />
          <img
            className='menu-icon'
            src='./imgs/subjects/menuIcon.svg'
            alt=''
          />
          <div className='material-progress'>
            <span
              className='progress-bar'
              style={{ width: '40%', backgroundColor: ' #00A751' }}
            ></span>
          </div>


          <h4 className='name'>Arabic</h4>
          <p className='para'>
            Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit....
          </p>
          <div className='d-flex justify-content-between'>
            <button className='action m-0'>Start</button>
            <span className='rate'>
              <img
                className='rate__icon'
                src='./imgs/subjects/rateIcon.png'
                alt=''
              />
              <span className='rate__num'>4.3</span>
            </span>
          </div>
        </div>
        </Link>
      </div>
    </Container>
  );
};

export default studyMaterial;
