import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './scss/header.scss';
import { useAuthStore } from '../store/authStore';
import { useProductStore } from '../store/useProductStore';

// 메인메뉴
const menus = [
  { key: 'all', label: 'All' },
  { key: 'man', label: '남자' },
  { key: 'women', label: '여자' },
  { key: 'jewelery', label: '보석' },
  { key: 'electronics', label: '전자제품' },
];
const Header = () => {
  // 1. 상태변수
  const { user, onLogout } = useAuthStore();
  const { cartCount } = useProductStore();
  const navigate = useNavigate();

  // 2. 메서드
  const handleLogout = () => {
    onLogout();
    navigate('/');
  };
  // 3. 화면에 뿌려질 내용
  return (
    <header>
      <div className="content-inner">
        <div className="header-left">
          <h1 className="logo">
            <Link to="/">
              <img src="/images/logo.svg" alt="logo" />
            </Link>
          </h1>
          <nav>
            <ul className="main-menu">
              {menus.map((menu) => (
                <li key={menu.key}>
                  <Link to={`/${menu.key}`}>{menu.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="header-right">
          <ul className="gnb-list">
            {user ? (
              <>
                <li>
                  <Link to="/userinfo">
                    <img src="/images/loginMember.png" alt="" />
                    <span>MY Page</span>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout}>
                    <img src="/images/loginJoin.png" alt="" />
                    <span>Logout</span>
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <img src="/images/loginMember.png" alt="" />
                    <span>LOGIN</span>
                  </Link>
                </li>
                <li>
                  <Link to="/join">
                    <img src="/images/loginJoin.png" alt="" />
                    <span>JOIN</span>
                  </Link>
                </li>
              </>
            )}
            <li className="cart">
              <Link to="/cart">
                <img src="/images/cart.png" alt="" />
                <div>
                  <span className="cart-num">{cartCount}</span>
                </div>
              </Link>
            </li>
          </ul>
          <div className="search-wrap">
            <input type="text" placeholder="search" />
            <i className="search-icon">
              <img src="/images/search.png" alt="" />
            </i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
