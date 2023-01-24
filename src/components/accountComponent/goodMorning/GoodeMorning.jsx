import { Col, Container, Row } from "react-bootstrap";

const GoodMorning = () => {

    return (
        <Container>
            <div className="rounded mt-4 p-3" 
            style={{background:"#EED792"}}>
               <Row>
                    <Col md={7} className="col-12">
                        <div className="ps-0 ps-md-3 text-center text-md-start">
                            <h2 className="mt-3">Good Morning</h2>
                            <p className="mt-4 fs-6">
                                You’ve learned <span className="fw-bold">70% of your</span>  goal this week! <br/>
                                Keep it up and improve your results!
                            </p>
                        </div>
                    </Col>
                    <Col className="col-5 d-none d-md-block">
                        <img className=" d-block ms-4 mt-2"
                         src="/imgs/account/rect.png"
                          alt="arrow"
                          style={{transform:'scale(0.7)'}}
                          />
                    </Col>
                </Row> 
            </div>
        </Container>
       
    )
}

export default GoodMorning;
