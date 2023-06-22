import React ,{useEffect,useState,useContext}from 'react'
import Recommendsubone from "./Recommendsubone"
import {Context} from '../Context'

const Recommendsub = (props) => {
  const category = props.category
  console.log("mmmmmmmm", category)


  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false);

  const [isFetching, setIsFetching] = useState(false);
  const { language } = useContext(Context);


  async function getData() {
  

    try {
      setIsFetching(true);

      setLoading(true);

      const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&language=${language}&apiKey=ce63b8d8748740df8264c59cab65f36b`);
      const data = await response.json();
       console.log("ooooo",data.articles);
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
    <div className='Recommendsub'>
        <div className='d-flex'>
            <span><h5>recommend</h5></span>
            <span>more <i className='fa fa-angle-right'></i></span>
        </div>
        <Recommendsubone category={category} data={data[0]}  />
        <hr/>
        <Recommendsubone category={category} data={data[1]} />
        <hr/>
        <Recommendsubone category={category} data={data[2]} />

    </div>
  )
}

export default Recommendsub