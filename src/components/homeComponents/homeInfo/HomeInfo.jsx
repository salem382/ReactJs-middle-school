import './homeinfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faEnvira} from '@fortawesome/free-brands-svg-icons'
import {Container, Row, Col} from 'react-bootstrap'

const Homeinfo = () => {

   

    return (
        <div>
           <Container>
                <Row>
                    <Col md={6}>
                        <div id="khalil" style={{height:'20px'}} className='border'>
                            SRGRsd aSFasdf asdfasdf
                        </div>
                    </Col>
                    <Col md= {6}>
                         <div style={{height:'20px'}} className='border'>
                            STGSDGSFGSFG
                        </div>
                    </Col>
                </Row>
           </Container>
        </div>
    )
}

export default Homeinfo;