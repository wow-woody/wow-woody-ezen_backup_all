import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainSwiper = () => {
  // 메인 이미지를 저장할 배열
  const slides = [
    { src: "./images/main_slider_01.jpg", alt: "slider1" },
    { src: "./images/main_slider_02.jpg", alt: "slider2" },
    { src: "./images/main_slider_03.jpg", alt: "slider3" },
    { src: "./images/main_slider_04.jpg", alt: "slider4" },
  ];
  return (
    <div className="main-sliders">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000 }}
        navigation
        pagination
        loop={true}
      >
        {slides.map((slide, id) => (
          <SwiperSlide key={id}>
            <img src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSwiper;
