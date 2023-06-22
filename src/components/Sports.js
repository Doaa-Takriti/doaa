import React ,{useState,useEffect,useContext}from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import ImgSport from "./ImgSport"
import Imgdesc from "./Imgdesc"
import DescSport from "./DescSport "
import { Context } from "../Context";


const BreakingNews = () => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false);
    const { search ,darkMode1,language} = useContext(Context);


    async function getData() {


      try {

        setLoading(true);

         const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&category=sport&language=${language}&page=1&pagesize=8&apiKey=ce63b8d8748740df8264c59cab65f36b`);
         const data = await response.json();
         setData(data.articles)


         setLoading(false);

      } catch (error) {

         console.error(error);
      }
   }
   useEffect(() => {
  
   
      getData();
    },[search,language]) 
  return (
    <div 
    className={darkMode1 ? "HeaderNewsdark BreakingNews sports" : "BreakingNews sports"}> 
    <Container>
        <div className="heading">
            <h1>sports</h1>

            <span>
                find out more
                <i className="fa fa-angle-right"></i>
            </span>
        </div>
        <br/>

        {loading ? (
              <>loading..</>
            ) : (
         
                <>
        <Row>
            <Col lg={3}>
                <ImgSport data={data[0]}
                />
            </Col>
            <Col lg={3}>
            <DescSport data={data[1]} />

            </Col>

            <Col lg={3}>
                <Imgdesc data={data[2]} />
            </Col>

            <Col lg={3}>
            <Imgdesc data={data[3]} />
            </Col>

        </Row>
        <br/>
       
        <Row>
        <Col lg={3}>
                <Imgdesc data={data[4]}/>
            </Col>

            <Col lg={3}>
            <Imgdesc data={data[5]} />
            </Col>
            <Col lg={3}>
                <ImgSport  data={data[6]} />
            </Col>
            <Col lg={3}>
            <DescSport data={data[7]} />

            </Col>

         

        </Row>
            

        <br/>
        </>
            )}
    </Container>


    </div>
  )
}

export default BreakingNews