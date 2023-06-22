import React,{useEffect,useState,useContext} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import BreakingNewsSub from './BreakingNewsSub';
import BreakingNewsSubCenter from "./BreakingNewsSubCenter"
import { Context } from "../Context";


const BreakingNews = () => {


    const [data2,setData2] = useState([])
    const [loading, setLoading] = useState(false);
    const { search,darkMode1,language } = useContext(Context);
console.log("hiiiii",search)


    async function getData() {

  setLoading(true);

  try {


     const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&category=general&language=${language}&page=1&pagesize=5&apiKey=ce63b8d8748740df8264c59cab65f36b`);
     const data = await response.json();
     setData2(data.articles)

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
    className={darkMode1 ? "HeaderNewsdark BreakingNews" : "BreakingNews"}> 
    <Container>
        <div className="heading">
            <h1>breaking news</h1>

            <span>
                find out more
                <i className="fa fa-angle-right"></i>
            </span>
        </div>
        <br/>

     {loading  ? (
      <p>loading</p>
     ) :
(
         <>
        <Row>
            <Col lg={3}>
                <BreakingNewsSub data={data2[0]}  />
                <BreakingNewsSub data={data2[1]}  />

            </Col>
            <Col lg={6}>
            <BreakingNewsSubCenter data={data2[2]}   />

            </Col>
            <Col lg={3}>
            <BreakingNewsSub data={data2[3]} />
                <BreakingNewsSub data={data2[4]}  />
            </Col>


        </Row>
        </>
)}
        <br/>
    </Container>


    </div>
  )
}

export default BreakingNews