import React,{useEffect} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Recommendsubone = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
   
    
    
  },[]) 
  return (
    <div className='Recommendsubone'
   >
        <Row
         data-aos="fade-left"
       >
            <Col xs={5}>
               <img src={props?.data?.urlToImage} alt="" />
            </Col>
            <Col xs={7}>
                <div>
                    <span>#{props.category}</span> 
              
                    <span>may 22,2023</span>
                </div>
                <p>{props?.data?.title}</p>
            </Col>
        </Row>
    </div>
  )
}

export default Recommendsubone