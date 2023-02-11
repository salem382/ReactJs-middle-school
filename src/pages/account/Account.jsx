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


const Account = () => {

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