import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './scss/productDetail.scss';
import { useProductStore } from '../store/useProductStore';
import DetailCartPopup from '../components/DetailCartPopup';
import DetailWishPopup from '../components/DetailWishPopup';

// 사이즈를 저장할 배열
const size = ['S', 'M', 'L'];

const ProductDetail = () => {
    const [showWish, setShowWish] = useState(false);
    // 주소줄에 있는 파라메터값을 받아서 사용하기
    const { id } = useParams();
    const { items, onFecthItems, onAddToCart, onAddWishList } = useProductStore();
    // 상품을 저장할 변수
    const [product, setProduct] = useState('');
    // 선택된 사이즈를 체크하기
    const [selectSize, setSelectSize] = useState('');
    // 수량을 체크해줄 변수
    const [count, setCount] = useState(1);
    // wkdqkrnsl 팝업창을 보이고 숨길 변수
    const [showPopup, setShowPopup] = useState(false);
    // 찜 팝업창을 보이고 숨길 변수
    const [showWishPopup, setShowWishPopup] = useState(false);

    // 새로고침을 하면 렌더링 되면서 모든 값이 초기화
    // 그래서 아이템이 비어있으면 데이터를 다시 불러오기
    useEffect(() => {
        if (items.length === 0) {
            onFecthItems();
        }
    }, []);

    useEffect(() => {
        console.log(items);
        if (!id || items.length === 0) return;
        // 뿌려줄 제품 찾기
        const findItem = items.find((item) => item.id === Number(id));
        setProduct(findItem);
    }, [id, items]);

    // ---- 장바구니 메서드 ----
    const handleAddToCart = () => {
        // 사이즈 옵션 체크 여부 확인하기
        if (!selectSize) {
            alert('사이즈를 선택하세요');
            return;
        }
        const productCart = {
            ...product,
            size: selectSize,
            count: count,
        };

        onAddToCart(productCart);

        // 팝업창 열기
        setShowPopup(true);
    };

    // ---- 찜 메서드 ----
    const handleAddToWish = () => {
        onAddWishList(product);
        setShowWish(true);

    };

    // ---- 팝업창 닫기 ----
    const handleClosePopup = () => {
        // 장바구니 팝업 닫기
        setShowPopup(false);
        // 찜
        setShowWish(false);
    }


    return (
        <div className="sub-page">
            <div className="content-inner product-wrap">
                <div className="product-img">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-text">
                    <p className="cate-title">{product.category}</p>
                    <p className="product-title">{product.title}</p>
                    <p className="price">{product.price}</p>
                    <div className="product-size">
                        <strong>사이즈</strong>
                        <ul>
                            {size.map((size, id) => (
                                <li key={id}>
                                    <button
                                        className={selectSize === size ? 'active' : ''}
                                        onClick={() => setSelectSize(size)}>
                                        {size}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="product-count">
                        <strong>수량</strong>
                        <div className="product-count-box">
                            <button onClick={() => setCount((c) => Math.max(1, c - 1))}>-</button>
                            <span>{count}</span>
                            <button onClick={() => setCount((c) => c + 1)}>+</button>
                        </div>
                    </div>
                    {/* 장바구니, 찜버튼 */}
                    <div className="cart-btn">
                        <button onClick={handleAddToWish}>찜하기</button>
                        <button onClick={handleAddToCart}>장바구니</button>
                    </div>
                    <p></p>
                </div>
            </div>

            {/* 장바구니 팝업 */}
            {showPopup ? <DetailCartPopup onClose={handleClosePopup} /> : ''}

            {/* 찜 팝업 */}
            {showWish ? <DetailWishPopup onClose={handleClosePopup} /> : ''}

        </div>
    );
};

export default ProductDetail;
