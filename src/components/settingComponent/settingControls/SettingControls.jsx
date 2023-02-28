import {Container, Row, Col} from 'react-bootstrap';
import './settingcontrols.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SettingControls = () => {



    const navigate = useNavigate();
    


    //https://newbrainsmiddle.com
    //localStorage.getItem('newbrainsToken')

    /*
    
    
  const { name, teacher_name, teacher_image, teacher_id, id, image } = subjectData;
  const teacherImageUrl = "https://newbrainshigh.com/profileImages/teachers/";
  const SubjectImageUrl = "https://newbrainshigh.com/subjects/";

    */




    const handleLogout = async () => {

        let token = localStorage.getItem("newbrainsToken");
        try {
            const {data} = await axios.post('https://newbrainsmiddle.com/api/auth/userLogout',null, {
                headers: {
                  'Authorization': `Bearer ${token}`
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