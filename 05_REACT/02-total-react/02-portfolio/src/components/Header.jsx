import React from 'react'
import { Link } from 'react-router-dom'

//메뉴를 저장할 오브젝트 생성
const menus = [
    { key: "About", label: "소개" },
    {
        key: "Portfolio", label: "포트폴리오",
        sub: [
            { key: "project1", label: "프로젝트1" },
            { key: "project2", label: "프로젝트2" }
        ]
    },
    { key: "Skills", label: "스킬" },
    { key: "Todolist", label: "오늘일정" },
    {
        key: "Contact", label: "연락처",
        sub: [
            { key: "email", label: "이메일문의" },
            { key: "phone", label: "전화문의" }
        ]
    }
]
const Header = () => {
    return (
        <header>
            <div className='content-inner'>
                <div className="header-left">
                    <h1 className="logo">
                        {/* 제일 상단으로 간단 뜻 "/" */}
                        <Link to="/">길동홍</Link>
                    </h1>
                    <ul className="main-menu">
                        {/* 오브젝트배열이 여러개일 경우 map으로 소환 menus를 menu로 변수지정 */}
                        {menus.map((menu, id) => (
                            // menu의 key와 label로 구조형성
                            <li key={id}>
                                <Link to={`/${menu.key}`}>{menu.label}</Link>
                                {/* // 서브메뉴가 있는경우 */}
                                {menu.sub && (
                                    <ul className="sub-menu">
                                        {menu.sub.map((submenu) => (
                                            <li key={submenu.key}>
                                                <Link to={`/${menu.key}/${submenu.key}`}>
                                                    {submenu.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header-right"></div>
                <ul className="gnb-list">
                    <li>
                        <Link to="login">login</Link>
                    </li>
                    <li>
                        <Link to="join">join</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header