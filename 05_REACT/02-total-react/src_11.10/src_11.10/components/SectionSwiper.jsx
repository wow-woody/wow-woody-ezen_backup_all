import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ProductCard from './ProductCard';
import { useProductStore } from '../store/useProductStore';

const SectionSwiper = ({ category, count }) => {
  const { onItemCategory } = useProductStore();
  // const onItemCategory = useProductStore((state) => state.onItemCategory);

  const categoryItems = onItemCategory(category);
  return (
    <div className="goods-list">
      <Swiper
        modules={[Navigation, Scrollbar]}
        navigation={count !== 3}
        scrollbar={count === 3}
        spaceBetween={40}
        slidesPerView={count}>
        {categoryItems.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/product/${item.id}`}>
              <ProductCard sendItem={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SectionSwiper;
