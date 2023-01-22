
import './settinginfo.scss';
import {Container, Row, Col} from 'react-bootstrap';

const Settinginfo = () => {

    return (
        <div className='mt-5 setting-info'>
            <Container>
                <Row>
                    <Col md = {3} className={'d-none d-md-block'}>
                        <div>
                            <img src='/imgs/setting/guy.png' alt="avtar"/>
                        </div>   
                    </Col>
                    <Col md = {9} className='col-12'>
                        <form className='mt-4'>
                            <div className='setting-name'>
                                <input placeholder='First Name' type='text'/>
                                <input placeholder='Last Name' type='text'/>
                            </div>
                            <div>
                                <input placeholder='Email' type='email'/>
                            </div>
                            <div>
                                <input placeholder='Password' type='password'/>
                            </div>
                            <div className='setting-phone'>
                                <input placeholder='phone' className='me-1 me-md-0' type='number'/>
                                <button>VERFIED</button>
                            </div>
                            <div>
                                <input placeholder='Parent phone' type='number'/>
                            </div>
                            <div>
                                <input placeholder='Gender' type='text'/>
                            </div>
                            <div>
                                <input placeholder='state' type='text'/>
                            </div>
                            <div>
                                <input placeholder='city' type='text'/>
                            </div>
                            <div>
                                <input placeholder='section' type='text'/>
                            </div>
                            <div>
                                <input placeholder='Grade' type='text'/>
                            </div>
                            <div>
                                <input placeholder='Age' type='text'/>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Settinginfo;
