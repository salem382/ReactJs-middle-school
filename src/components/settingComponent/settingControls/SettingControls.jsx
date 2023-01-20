import {Container, Row, Col} from 'react-bootstrap';
import './settingcontrols.scss';
const SettingControls = () => {

    return (
        <section className='setting-controls mt-5 w-75 m-auto'>
            <Container>
                <div className='d-flex justify-content-between'>
                    <div>
                        <button className='per-info'>Personal Information</button>
                        <button className='pass'>Password</button>
                    </div>
                    <div>
                        <button className='log-out'>Log Out</button>
                    </div>
                </div>
            </Container>
            
        </section>
    )
}

export default SettingControls;