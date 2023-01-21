import {Container, Row, Col} from 'react-bootstrap';
import './settingcontrols.scss';
import { Link } from 'react-router-dom';
const SettingControls = () => {

    return (
        <section className='setting-controls pe-5 pe-lg-0 mt-5 m-auto'>
            <Container>
                <Row>
                    <Col sm={5} md = {4} className='col-12'>

                        <Link to="/setting" className='nav-link'>
                            <button className='per-info d-block m-auto m-sm-0'>Personal Information</button>
                        </Link>
                    </Col>
                    <Col  sm ={3} className='col-6'>
                        <Link to="/setting/pass" className='nav-link'>
                            <button className='pass mt-3 mt-sm-0 d-block ms-auto ms-sm-0'>Password</button>
                        </Link>
                    </Col>
                    <Col  sm = {3} className='col-6'>
                        <div>
                            <button className='log-out mt-3 mt-sm-0 m-sm-auto d-block'>Log Out</button>
                        </div>
                    </Col>           
                </Row>
            </Container>
            
        </section>
    )
}

export default SettingControls;