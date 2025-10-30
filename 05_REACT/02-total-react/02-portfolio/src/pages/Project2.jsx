import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react'
import { projectsData } from '../data/projectsData';
import { Navigation } from 'swiper/modules';

const Project2 = () => {
  return (
    <div className='content-inner'>
      <h2>프로젝트 2</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        navigation={true}
        modules={[Navigation]}
      >
        {projectsData.map((item) => (
          <SwiperSlide>
            <div><img src={item.imgUrl} alt="" /></div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    </div>
  )
}

export default Project2