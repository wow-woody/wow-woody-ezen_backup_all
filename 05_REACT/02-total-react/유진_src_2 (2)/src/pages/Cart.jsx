import React from 'react';
import TItle from '../components/TItle';
import { useProductStore } from '../store/useProductStore';
import './scss/cart.scss';

const Cart = () => {
  const { cartItems, onRemoveCart, onPlusCount, onMinusCount, totalPrice } = useProductStore();
  return (
    <div className="sub-page">
      <div className="content-inner">
        <TItle />
        <div className="cart-wrap">
          <div className="cart-title">
            <div className="cart-left">상품정보</div>
            <div className="cart-right">
              <p>주문금액</p>
              <p>수량</p>
            </div>
          </div>
          <div className="cart-list-wrap">
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li>
                  <div className="cart-left">
                    <img src={item.image} alt={item.title} />
                    <div className="cart-info">
                      <p className="cart-title">{item.title}</p>
                      <p className="cart-size">사이즈 : {item.size}</p>
                    </div>
                  </div>
                  <div className="cart-right">
                    <p>{item.price}</p>
                    <p>{item.price * item.count}</p>
                    <div className="cart-count">
                      <button onClick={() => onMinusCount(item.id, item.size)}>-</button>
                      <span>{item.count}</span>
                      <button onClick={() => onPlusCount(item.id, item.size)}>+</button>
                      <button onClick={() => onRemoveCart(item.id, item.size)}>삭제</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-bottom">
            <p>총 금액:{totalPrice} </p>
            <button>모두 구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
