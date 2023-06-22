import React,{useEffect, useState,useContext } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import { Context } from "../Context";
import {Link} from "react-router-dom";
import Spinner1  from './Spinner1';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technology = () => {
  const [data,setData] = useState({})
  const [loading, setLoading] = useState(false);

  const { category2, setCategory2,search,setSearch,darkMode1,language } = useContext(Context);
console.log("category",category2)
console.log("language",language)



  async function getData() {

    
      setLoading(true);
      try {
      
        const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&category=${category2}&language=${language}&page=1&pagesize=1&apiKey=ce63b8d8748740df8264c59cab65f36b`);
        const data = await response.json();
        console.log("dddddta",data.articles[0]);
        console.log("response",response);
        setTimeout(() => {
        setData(data.articles[0])
 
 
        setLoading(false);
        
      



    

      }, 1000);

    } catch (error) {

       console.error(error);
    }
 
 }
 

useEffect(() => {
  AOS.init({
    duration: 1000
  });

    getData();
  },[category2,search,language]) 
  return (
    <div className={darkMode1 ? "HeaderNewsdark Technology" : "Technology"}
    >
        <Container>

          
        {loading ? (
              <div className='loading'>
                <Spinner1 />
              </div>
            ) : (
              <>
              <Link
              to="/Detailarticle"
              state={{category2}}>
            <Row>
            <Col lg={8}>
                <img src={data?.urlToImage} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
alt="" />            </Col>
            <Col lg={4}>
                <div className="tech-desc">
                    <span>#{category2}</span>
                    <h5 >
                       {data?.title}
                    </h5>
                    <p data-aos="fade-left">{data?.description}</p>

                    <div className='d-flex'>
                     <span>
                        7 min read
                     </span>
                     <span>
                      {data?.publishedAt?.substring(10, 0)}
                     </span>
                    </div>
                </div>
            </Col>
            </Row>
            </Link>
            </>
            )}



        </Container>

    </div>
  )
}

export default Technology