import React,{useMemo} from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAuthStore } from '../store/authStore'
import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ProductCard from './ProductCard'


const SectionSwiper = ({ category, count }) => {
    const { onItemsCategory } = useAuthStore();
    const categoryItems = onItemsCategory(category);
    // const categoryItems = useMemo(() => onItemsCategory(category), [category, onItemsCategory]);

    return (
        <div className='goods-list'>
            <Swiper
                modules={[Navigation, Scrollbar]}
                navigation={count !== 3}
                scrollbar={count === 3}
                spaceBetween={40}
                slidesPerView={count}
            // breakpoints={{}}
            >
                {categoryItems.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link to={`/products/${item.id}`}>
                            <ProductCard sendItem={item} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default SectionSwiper