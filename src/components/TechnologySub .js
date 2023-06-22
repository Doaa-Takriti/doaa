import React,{useEffect,useState,useContext} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import {Link} from "react-router-dom"
import Spinner1 from './Spinner1';
import { Context } from '../Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TechnologySub  = () => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false);

    const [isFetching, setIsFetching] = useState(false);
    const [limit,setLimit] = useState(3)

    const { search,darkMode1,category2,language } = useContext(Context);

    async function getData() {
    

      try {
        setIsFetching(true);

        setLoading(true);

        const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&category=general&language=${language}&page=1&pagesize=${limit}&apiKey=ce63b8d8748740df8264c59cab65f36b`);
         const data = await response.json();
         console.log("suuuub",data);
         setTimeout(() => {
         setData(data.articles)
         setIsFetching(false);

         setLoading(false);
        }, 1500);

      } catch (error) {
        setIsFetching(false);

         console.error(error);
      }
   }
   
  
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
   
      getData();
    
    
  },[search,limit,language]) 
  const LoadMore = () => {
    setLimit(limit+3)

  }
  return (
    <div 
    className={darkMode1 ? "HeaderNewsdark TechnologySub" : "TechnologySub"}
    >
        <Container>

        {loading ? (
            <div className='loading'>
            <Spinner1 />
          </div>
            ) : (
         
   data.map(dataproduct => {
    return (
        <>
        <Row data-aos="fade-right" key={dataproduct?.source?.id}>
        <Col lg={6}>
            <div className='date'>
                <span>{dataproduct?.publishedAt?.substring(10, 0)}</span>
                <p>{dataproduct?.tilte}</p>
            </div>
        </Col>
        <Col lg={2}>
        <Link
        to="/Detailarticle"
        state={{category2}}>
           <div className="span-img">
           
            <img src={dataproduct?.urlToImage} alt="" />
            <span>general</span>
            
           </div>
           </Link>
        </Col>
        <Col lg={4}>
           <p>
           {dataproduct?.title}
           </p>
        </Col>
    </Row>
    </>
    )
        }

    )
  )}
     
     <div className='loadmore'>
      
     <a  href="#" onClick={LoadMore}>
           load more
            </a>
</div>
            </Container> 

            </div>
  )
}

export default TechnologySub 