import React,{useContext} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import { Context } from "../Context";

const Headingarticle = (props) => {
  const { darkMode1 } = useContext(Context);

  return (
    <div
    className={darkMode1 ? "HeaderNewsdark headingDetailarticle" : "headingDetailarticle"}>
        <Container>
          <div>
            <h3>{props?.data?.title}</h3>
            <div>
                <Row>
                    <Col lg={7}
                    >
                      <span className='technology'>#{props?.category}</span>
                    
                      <span className='by'>by {props?.data?.author}</span>
                  
                      <span>{props?.data?.publishedAt?.substring(10, 0)}</span>
                  
                      <span>{props?.data?.publishedAt?.substring(15, 10)}</span>
                    </Col>
                    <Col lg={5}
                    >
                  <span>
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                    7 min read
                  </span>
                    </Col>
                </Row>
            </div>
            </div>

        </Container>
        <Container>
        <p> {props?.data?.title}</p>

        </Container>

    </div>
  )
}

export default Headingarticle
