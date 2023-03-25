import {Container, Row, Col} from 'react-bootstrap';
import './settingcontrols.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SettingControls = () => {



    const navigate = useNavigate();
    


    
 


    const handleLogout = async () => {

        try {
            const {data} = await axios.post('http://localhost:5000/user/logout',null, {
                headers: {
                  token: `${localStorage.getItem("newbrainsToken")}`
                }
            })
            
        }catch (error) {
            console.log (error);
        }
        localStorage.removeItem("newbrainsToken");
        navigate("/")
    }

    return (
        <section className='setting-controls mt-5'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className='nav-link m-auto m-md-0 w-50'>
                            <button className='per-info'>Personal Information</button>
                        </div>
                    </Col>
                    <Col  sm = {6} className=''>
                        <div className='w-25 m-auto m-md-0 mt-3 mt-sm-0 ms-md-auto d-bock'>
                            <button onClick={handleLogout} className='log-out'>Log Out</button>
                        </div>
                    </Col>           
                </Row>
            </Container>
            
        </section>
    )
}

export default SettingControls;