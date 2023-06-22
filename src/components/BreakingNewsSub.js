import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const BreakingNewsSub = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  },[])
  return (
    <div className='BreakingNewsSub'    data-aos="flip-down">
        <img src={props?.data?.urlToImage}
        alt="" />
        <p>
      {props?.data?.title}
        </p>
    </div>
  )
}

export default BreakingNewsSub