import CircularProgress from "./CircularProgress";
import { Container, Row, Col } from "react-bootstrap";

const CircularProgressSection = () => {

    return (
        <section className="mt-5">
            <Row>
                <Col md = {3} sm = {6}>
                    <CircularProgress color="red" percent = "20" subjectName = "math" registedNumber = "10" />
                </Col>
                <Col md = {3} sm = {6}>
                    <CircularProgress color="blue" percent = "30" subjectName = "math" registedNumber = "50" />
                </Col>
                <Col md = {3} sm = {6}>
                    <CircularProgress color="red" percent = "20" subjectName = "arabic" registedNumber = "70" />
                </Col>
                <Col md = {3} sm = {6}>
                    <CircularProgress color="blue" percent = "40" subjectName = "asgasg" registedNumber = "80" />
                </Col>
            </Row>
        </section>
    )
}

export default CircularProgressSection;