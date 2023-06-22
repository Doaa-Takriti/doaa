import React,{useEffect,useState} from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import LoadMore from "./LoadMore"


const TechnologySub  = () => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false);

    const [isFetching, setIsFetching] = useState(false);


    async function getData() {
    

      try {
        setIsFetching(true);

        setLoading(true);

         const response = await fetch('https://newsapi.org/v2/top-headlines?category=general&language=en&page=1&pagesize=3&apiKey=4e7a9721d66d424296f2a549743b21bb');
         const data = await response.json();
         console.log("suuuub",data.articles);
         setData(data.articles)
         setIsFetching(false);

         setLoading(false);

      } catch (error) {
        setIsFetching(false);

         console.error(error);
      }
   }
   
  
  useEffect(() => {

   
      getData();
    
  },[]) 
  return (
    <div className='TechnologySub'
    >
        <Container>
        {isFetching && <p>Loading data...</p>}

        {loading ? (
              <>loading..</>
            ) : (
         
   data.map(dataproduct => {
    return (
        <>
        <Row key={dataproduct?.source?.id}>
        <Col xs={6}>
            <div className='date'>
                <span>{dataproduct?.publishedAt?.substring(10, 0)}</span>
                <p>{dataproduct?.tilte}</p>
            </div>
        </Col>
        <Col xs={2}>
           <div className="span-img">
            <img src={dataproduct?.urlToImage} alt="" />
            <span>{data?.category}</span>
           </div>
        </Col>
        <Col xs={4}>
           <p>
           {dataproduct?.description}
           </p>
        </Col>
    </Row>
    </>
    )
        }

    )
  )}
     
      
      
            <LoadMore />

            </Container> 

            </div>
  )
}

export default TechnologySub 