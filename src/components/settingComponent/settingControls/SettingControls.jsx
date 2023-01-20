import {Container, Row, Col} from 'react-bootstrap';
import './settingcontrols.scss';
const SettingControls = () => {

    return (
        <section className='setting-controls mt-5 m-auto'>
            <Container>
                <Row>
                    <Col sm={9}  md = {6} className='col-9'>
                        <div className=''>
                            <button className='per-info'>Personal Information</button>
                            <button className='pass'>Password</button>
                        </div>
                    </Col>
                    <Col  sm={3} md= {6} className='col-4 mt-2 mt-sm-0 m-auto'>
                        <div className=''>
                            <button className='log-out m-sm-auto d-block'>Log Out</button>
                        </div>
                    </Col>            
                </Row>
            </Container>
            
        </section>
    )
}

export default SettingControls;