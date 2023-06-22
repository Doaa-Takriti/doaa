import React,{useContext} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";


// import required modules
import {  Autoplay, Scrollbar, Navigation,} from "swiper";
import { Context } from "../Context";


export default function Cardslider(props) {
    const { darkMode1 } = useContext(Context);
    const data = props.data
 
  return (
    <div className={darkMode1 ? "HeaderNewsdark swiperrrr" : "swiperrrr"}>
        <div 
        className={darkMode1 ? "HeaderNewsdark most" : "most"}>
            <h3>
            most popular
            </h3>
        </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay,Scrollbar, Navigation]}
        scrollbar={true}
        navigation={true}
        className="mySwiper"
      >
        {data.map(data1 => {
            return (
                <SwiperSlide>
                <div>
                <span className="tech">#{props.category}</span>
                <p>{data1?.title}</p>
                <img src={data1.urlToImage} alt="" />
                </div>
            </SwiperSlide>
            )
        })}
    
      </Swiper>
    </div>
  );
}
