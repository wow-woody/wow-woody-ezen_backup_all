import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthConText';

const LogoutButton = () => {
    // context에서 user와 handleLogout 가져오기
    const { user, handleLogout } = useContext(AuthContext);

    // user가 없으면 아무것도 렌더링하지 않음
    if (!user) return <div>로그인이 필요합니다</div>;

    // 화면에 출력할 내용 작성
    return (
        <div>
            <p>안녕하세요 {user}님</p>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    )
}

// 컴포넌트 내보내기
export default LogoutButton
