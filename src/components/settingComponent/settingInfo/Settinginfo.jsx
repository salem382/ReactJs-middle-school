
import './settinginfo.scss';
import {Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Settinginfo = () => {

    const {user} = useSelector(state => state.userSlice);

    const [fileUrl, setFileUrl] = useState(user.image ? user.image :'/imgs/navbar/user.webp');
    
    const navigate = useNavigate();
    const [isPost, setIsPost] = useState (false);
    const [errArr, setErrArr] = useState({});
    const [msg, setMsg] = useState('');
    const [userData, setUserData] = useState({
        name:"",
        phone:"",
        parent_phone:"",
        parent_email:"",
        city: "",
        state:"",
        image:""
    });


    const postData = (e) => {
        let usr = {...userData};
        usr[e.target.name] = e.target.value;
        setUserData({...usr})
        console.log (usr);   
    }

    const postDataForFile = (e) => {
        setFileUrl(URL.createObjectURL(e.target.files[0]));
        let usr = {...userData};
        usr[e.target.name] = e.target.value;
        setUserData({...usr})
        console.log (usr); 
    }
   

    const getData = async() => {
        setIsPost(true);
        try {
            const {data} = await axios.post('https://newbrainsmiddle.com/api/auth/userUpdateProfile',userData,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("newbrainsToken")}`
                }
            })
            console.log (data);
        }
        catch (error) {
            setIsPost(false);
            console.log (error);
        }
    }

    const submitData = async (e) => {
        e.preventDefault();
        getData();
    }


    return (
        <div className='mt-5 setting-info'>
            <Container>
                <form className='mt-4' onSubmit={submitData}>
                    <Row>
                    <Col md = {3} className={'d-none d-md-block'}>
                        <div className='position-relative'
                            style={{width:"150px", height:"150px"}}>

                            <img  className='rounded-circle position-absolute top-0 start-0 end-0 bottom-0' src={fileUrl} alt="avtar"
                                style={{zIndex:"1", width:"100px", height:"100px"}}
                            />
                            <input  role={"button"} onChange={(e) => postDataForFile(e)} name="image" className='position-absolute top-0 start-0 end-0 bottom-0'
                                style={{zIndex:"2", opacity:"0"}}
                            type="file" accept="image/png, image/jpeg"/>
                        </div>   
                    </Col>
                    <Col md = {9} className='col-12'>
                    <div className='setting-name'>
                        <input onChange={(e) => postData(e)} name="name" placeholder='Full Name' type='text'/>
                    </div>
                    <div className='setting-phone'>
                        <input onChange={(e) => postData(e)} name="phone" placeholder='phone' className='me-1 me-md-0' type='number'/>
                    </div>
                    <div>
                        <input onChange={(e) => postData(e)} name="parent_email" placeholder='Parent Email' type='email'/>
                    </div>
                    <div>
                        <input onChange={(e) => postData(e)} name="parent_phone" placeholder='Parent phone' type='number'/>
                    </div>

                    <div>
                        <input onChange={(e) => postData(e)} name="state" placeholder='state' type='text'/>
                    </div>
                    <div>
                        <input onChange={(e) => postData(e)} name="city" placeholder='city' type='text'/>
                    </div>
                     <div className="btns-setting-send-data mt-4 pb-5 d-flex justify-content-end">
                        <div>
                            <button className="cancel">Cancel</button>
                            <button className="save">Save</button>
                        </div>
                    </div>
                    </Col>
                    </Row>
                </form>
            </Container>
        </div>
    )



}

export default Settinginfo;
