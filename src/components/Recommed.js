import React,{useContext} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Recommedcenter from "./Recommedcenter"
import Recommendsub from "./Recommendsub"
import RecommedIcon from "./RecommedIcon"
import { Context } from "../Context";

const Recommed = (props) => {
    const { darkMode1 } = useContext(Context);

  return (
    <div 
    className={darkMode1 ? "HeaderNewsdark recommed" : "recommed"}>
        <Container fluid>
            <Row>
                <Col lg={2}>
                    <RecommedIcon />
                </Col>
                <Col lg={6}>
                    <Recommedcenter  data={props?.data[0]} />
                </Col>
                <Col lg={4}>
                    <Recommendsub category={props?.category}  />
                </Col>
            </Row>

        </Container>
    </div>
  )
}

export default Recommed