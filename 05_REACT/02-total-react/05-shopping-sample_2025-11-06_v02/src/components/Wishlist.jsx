import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useProductStore } from '../store/useProductStore'
import './scss/Wishlist.scss'

const Wishlist = () => {
    const { wishLists, onRemoveWish } = useProductStore();
    const navigator = useNavigate();
    // 상품 이미지를 클릭하면 상세페이지로 이동하기
    const handleGoDetail = (id) => {
        navigator(`/product/${id}`);
    }
    return (
        <div className=''>
            <ul className='wish-list'>
                {wishLists.map((wish) => (
                    <li>
                        <div className='img-box'
                            onClick={() => handleGoDetail(wish.id)}>
                            <img src={wish.image} alt="" /></div>
                        <div className='wish-info'>
                            <p>{wish.title}0</p>
                            <p>{wish.price}000000</p>
                            <div>

                                <button onClick={() => onRemoveWish(wish.id)}>삭제</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Wishlist
