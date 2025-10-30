// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Navigation } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const MainSwiper = () => {
  return (
    <>
    <Swiper 
    autoplay={{
        delay:2500,
    }}
    navigation={true} 
    pagination
    loop={true}
    modules={[Navigation,Autoplay,Pagination]}
    className="mySwiper"
    > 
        <SwiperSlide><img src="./images/slider1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/slider2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/slider3.jpg" alt="" /></SwiperSlide>       
    </Swiper>
    </>
  )
}

export default MainSwiper