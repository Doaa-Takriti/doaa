import React ,{useEffect,useState,useContext}from 'react'
import Headingarticle from "../components/Headingarticle"
import Recommed from "../components/Recommed"
import Cardslider from "../components/Cardslider"
import { useLocation } from 'react-router-dom'
import { Context } from "../Context";
import Spinner1 from '../components/Spinner1'

const Detailarticle = (props) => {
  const loaction = useLocation()
  console.log ("hhhhh",loaction?.state?.category2)
  const category = loaction.state.category2


  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false);

  const [isFetching, setIsFetching] = useState(false);
  const { category2, setCategory2,search,setSearch,darkMode1,language } = useContext(Context);



  async function getData() {
  

    try {
      setIsFetching(true);

      setLoading(true);

       const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${search}&category=${category}&language=${language}&apiKey=ce63b8d8748740df8264c59cab65f36b`);
       const data = await response.json();
       console.log("ooooo",data.articles);
       setTimeout(() => {
        setData(data.articles)
        setIsFetching(false);
 
        setLoading(false);
        
       }, 1000);
     

    } catch (error) {
      setIsFetching(false);

       console.error(error);
    }
 }
 

useEffect(() => {

 
    getData();
  
},[language ]) 

  return (
 
 
    <div className='Detailarticle'>
          {loading ? (
      <div className='loading'>
        <Spinner1 />
      </div>
    ) : (
<>
       <Headingarticle category={category} data={data[0]} />
       <img className='Detailarticleimg' src={data[0]?.urlToImage} alt="" />
       <Recommed language={language} category={category} data={data} />
       <Cardslider category={category} data={data} />
       </>
    )}
    </div>
  
  )

}

export default Detailarticle