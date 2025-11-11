import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainSwiper = () => {
  
    // 메인 이미지 저장할 배열 
    const slider = [
        {src:"./images/main_slider_01.jpg", alt:"메인슬라이더1"},
        {src:"./images/main_slider_02.jpg", alt:"메인슬라이더2"},
        {src:"./images/main_slider_03.jpg", alt:"메인슬라이더3"},
        {src:"./images/main_slider_04.jpg", alt:"메인슬라이더4"},
    ];
  
  
  
    return (
    <div className='main-sliders'>
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{delay:2500}}
            navigation
            pagination
            loop={true}
        >
            {slider.map((slide, id)=>(
                <SwiperSlide key={id}>
                    <img src={slide.src} alt={slide.alt}></img>
                </SwiperSlide>
            ))}
        </Swiper>
      
    </div>
  )
}

export default MainSwiper
