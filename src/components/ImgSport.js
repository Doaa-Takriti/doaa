import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImgSport = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  },[])

  return (
    <div className='ImgSport' data-aos="zoom-in">
      <img src={props?.data?.urlToImage} alt="" />
    
    </div>
  )
}

export default ImgSport