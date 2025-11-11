import React from 'react';
import { Link } from 'react-router-dom';
import './scss/detailCartPopup.scss';

const DetailWishPopup = ({ onClose }) => {
    return <div className="cart-popup-wrap" onClick={onClose}>
        <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
            <h2>찜 목록이 추가되었습니다.</h2>
            <div>
                <button onClick={onClose}>쇼핑 계속하기</button>
                <Link to="/userinfo"></Link>
            </div>
        </div>
    </div>
};

export default DetailWishPopup;
