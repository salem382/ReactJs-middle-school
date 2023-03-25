import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Wrapper from "../../components/wrapper/Wrapper";
import { Container, Row, Col } from "react-bootstrap";
import GoodMorning from "../../components/accountComponent/goodMorning/GoodeMorning";
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import './accountPage.scss';
import axios from "axios";

import { useEffect, useState } from "react";
import AllGrade from "../../components/allGradeContainer/AllGrade";

const Account = () => {


    
  const [allGrade, setAllGrade] = useState([]);

  const getData = async () => {

    try {
        const {data} = await axios.get('http://localhost:5000/result', {
          headers: {
            token: `${localStorage.getItem("newbrainsToken")}`
          }
      });

      setAllGrade([...data.results])
      console.log(data)
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
                      
                        {allGrade.map((grade, indx) => <Col key={indx} className='col-6'> 
                          <AllGrade  grade = {grade}/>
                        </Col>)
                         }
                    </Row>
                </Container>
                <Contact/>
                <Footer />
            </Wrapper>
        </div>
    )
}

export default Account; 