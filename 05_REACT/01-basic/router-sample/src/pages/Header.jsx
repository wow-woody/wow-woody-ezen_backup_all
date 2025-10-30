import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='inner'>
        <h1><Link to="/"></Link>로고</h1>
        <ul className="main-menu">
          <li><Link to="/about">about</Link></li>
          <li><Link to="/portfolio">portfolio</Link>
            <ul className='sun-menu'>
              <li><Link to="/portfolio/portfolioWeb">포트폴리오 웹</Link></li>
              <li><Link to="/portfolio/PortfolioReact">포트폴리오 리액트</Link></li>
            </ul>

          </li>
          <li><Link to="/skills">skills</Link></li>
          <li><Link to="/contact">contact us</Link></li>
          <li><Link to="/product/1">상품 1</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
