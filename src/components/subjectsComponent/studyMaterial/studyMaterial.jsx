import { Container } from 'react-bootstrap';
import './studyMaterial.scss';

const studyMaterial = () => {
  return (
    <Container>
      <div className='materials'>
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
              style={{ width: '20%', backgroundColor: ' #ff774c' }}
            ></span>
          </div>
          <h4 className='name'>Arabic</h4>
          <p className='para'>
            Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit....
          </p>
          <span className='time'>
            <img
              className='time__icon'
              src='./imgs/subjects/timeIcon.svg'
              alt=''
            />
            <span className='time__num'>2h 20m</span>
          </span>
          <div>
            <button className='action'>Start</button>
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
        <div className='material'>
          <img
            className='material-img'
            src='./imgs/subjects/materialImg2.png'
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
              style={{ width: '60%', backgroundColor: ' #00A751' }}
            ></span>
          </div>
          <h4 className='name'>Math</h4>
          <p className='para'>
            Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit....
          </p>
          <span className='time'>
            <img
              className='time__icon'
              src='./imgs/subjects/timeIcon.svg'
              alt=''
            />
            <span className='time__num'>2h 20m</span>
          </span>
          <div>
            <button className='action'>Start</button>
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
          <span className='time'>
            <img
              className='time__icon'
              src='./imgs/subjects/timeIcon.svg'
              alt=''
            />
            <span className='time__num'>2h 20m</span>
          </span>
          <div>
            <button className='action'>Start</button>
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
      </div>
    </Container>
  );
};

export default studyMaterial;
