import {Container, Row, Col} from 'react-bootstrap';
import './settingcontrols.scss';
const SettingControls = () => {

    return (
        <section className='setting-controls mt-5 m-auto'>
            <Container>
                <Row>
                    <Col  md = {6} className='col-9'>
                        <div>
                            <button className='per-info'>Personal Information</button>
                            <button className='pass'>Password</button>
                        </div>
                    </Col>
                    <Col  md= {6} className='col-3'>
                        <div>
                            <button className='log-out m-auto d-block'>Log Out</button>
                        </div>
                    </Col>            
                </Row>
            </Container>
            
        </section>
    )
}

export default SettingControls;