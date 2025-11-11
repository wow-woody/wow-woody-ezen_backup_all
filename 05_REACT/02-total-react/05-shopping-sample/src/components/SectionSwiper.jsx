import React from 'react'
import { Link } from 'react-router-dom';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAuthStore } from '../store/authStore';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ProductCard from './ProductCard';


const SectionSwiper = ({ category, count }) => {
    const {onItemsCategory} = useAuthStore();
    const categoryItems = onItemsCategory(category);
    return (
        <div>
            <div className="goods-list">
                <Swiper
                    modules={[Navigation, Scrollbar]}
                    navigation = {count !==3}
                    scrollbar = {count ===3}
                    spacesBetween={40}
                    slidesPerView={{count}}
                >

                    {categoryItems.map((item) => (
                        <swiperSlide key={item.id}>
                            <Link to={`/products/${item.id}`}>
                                <ProductCard sendItem={item} />
                            </Link>
                        </swiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SectionSwiper
