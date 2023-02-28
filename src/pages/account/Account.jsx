import Navbar from "../../components/navbar/Navbar";
import ClassProgressSection from "../../components/accountComponent/classProgressSection/ClassProgressSection";
import Sidebar from "../../components/sidebar/Sidebar";
import Wrapper from "../../components/wrapper/Wrapper";
import { Container, Row, Col } from "react-bootstrap";
import TimeSpentSection from "../../components/accountComponent/timeSpentSection/TimeSpentSection";
import CircularProgressSection from "../../components/accountComponent/circularProgressSection/CircularProgressSection";
import GoodMorning from "../../components/accountComponent/goodMorning/GoodeMorning";
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import './accountPage.scss';
import axios from "axios";
import { useEffect, useState } from "react";

const Account = () => {


    
    const [allGrade, setAllGrade] = useState([]);


  const getData = async () => {

    try {
        const {data} = await axios.get('https://newbrainsmiddle.com/api/auth/getQuizResult', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("newbrainsToken")}`
          }
      });

      setAllGrade([...data[0]])
      console.log(data[0])
    }
    catch (error) {

      console.log (error);
    }
  }  
  
  useEffect(() => {
    getData();
  },[])






    return (
        <div className="account-page">
            <Sidebar />
            <Navbar />
            <Wrapper>
                <Container>
                    <Row>
                        <Col className="col-12">
                            <GoodMorning />
                        </Col>
                        <Col lg={6}>
                            <ClassProgressSection />
                        </Col>
                        <Col lg={6}>
                            <TimeSpentSection />    
                        </Col>
                        <Col className="col-12">
                            <CircularProgressSection />
                        </Col>
                    </Row>
                </Container>
                <Contact/>
                <Footer />
            </Wrapper>
        </div>
    )
}

export default Account; 