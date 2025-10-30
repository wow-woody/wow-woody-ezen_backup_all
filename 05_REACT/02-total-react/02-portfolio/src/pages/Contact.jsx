import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="sub-page">
      <div className="inner">
        <h2>Contact</h2>

        {/* 하위 메뉴 */}
        <ul>
          <li><Link to="Email">이메일 문의</Link></li>
          <li><Link to="Phone">전화 문의</Link></li>
        </ul>

        {/* 하위 라우트가 렌더링될 위치 */}
        <Outlet />
      </div>
    </div>
  );
};

export default Contact;