import React from 'react'
import { Outlet } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='sub-page'>
      <div className="inner">
        <h2>Portfolio</h2>

        {/*이곳에 하위 페이지가 나타남*/}
        {/* Outlet 여기서부터 하위 페이지가 화면에 나타난다 */}
        {/* Outlet 아래 부분부터 하위 자식 페이지가 화면에 나타난다고 이해하면 됩니다 */}
        {/* 즉, 부모 컴포넌트에서 Outlet이 있는 위치에 자식 라우트의 컴포넌트가 표시됩니다.*/}
        <Outlet />
      </div>
    </div>
  )
}

export default Portfolio
