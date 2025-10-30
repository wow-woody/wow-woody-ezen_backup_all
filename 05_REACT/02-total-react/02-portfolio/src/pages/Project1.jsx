import React, { useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Project1 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='content-inner'>
      <h2>프로젝트</h2>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide><img src="./images/slider1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/slider2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/slider3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/slider4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/slider5.jpg" alt="" /></SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
      >
        <SwiperSlide><img src="./images/thumb1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/thumb2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/thumb3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/thumb4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/thumb5.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Project1