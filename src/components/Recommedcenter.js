import React,{useEffect} from 'react'
import Follow from "./Follow"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recommedcenter = (props) => {
    
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
   
    
    
  },[]) 
  return (
    <div className='Recommedcenter'>
        <span>{props?.data?.title}</span>
        <p data-aos="fade-right"
    
     data-aos-easing="ease-in-sine" className='mt20'>{props?.data?.content}</p>
        <p data-aos="fade-right"
  
     data-aos-easing="ease-in-sine">{props?.data?.title}</p>
        <p data-aos="fade-right"
   
     data-aos-easing="ease-in-sine">{props?.data?.description}</p>
      
        <img src={props?.data?.urlToImage} alt="" />
        <span>{props?.data?.title}</span>
        <p data-aos="fade-right"
    
     data-aos-easing="ease-in-sine" className='mt20'>{props?.data?.content}</p>
        <p data-aos="fade-right"
    
     data-aos-easing="ease-in-sine">{props?.data?.title}</p>
        <p data-aos="fade-right"
     
     data-aos-easing="ease-in-sine">{props?.data?.description}</p>
        
<hr/>
<Follow />
<hr/>

    </div>
  )
}

export default Recommedcenter