import React from 'react';
import { Link } from 'react-router-dom';
import './scss/detailCartPopup.scss';

const DetailCartPopup = ({ onClose }) => {
  return (
    <div className="cart-popup-wrap" onClick={onClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <h2>장바구니에 상품이 추가되었습니다</h2>
        <div className="popup-button">
          <button onClick={onClose}>쇼핑 계속하기</button>
          <Link to="/cart">장바구니로 이동</Link>
        </div>
      </div>
    </div>
  );
};

export default DetailCartPopup;
