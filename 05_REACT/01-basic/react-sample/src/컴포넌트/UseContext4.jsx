import React, { useState } from 'react'
import { AuthContext } from '../context/AuthConText';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

const UseContext4 = () => {
    // 1. 상태 변수 - context에서 사용할 데이터 만들기
    const [user, setUser] = useState('');

    // 2. 메서드 - 상태 변경 함수 - context에서 사용할 매서드 만들기
    //    로그인 처리 매서드(2)
    const handleLogin = (username) => {
        console.log({username});
        setUser('username');
    }

    //    로그아웃 처리 매서드(2)
    const handleLogout = () => {
        setUser('');
    }


    //3. 화면에 출력할 내용 작성
    return (
        <AuthContext.Provider value={{user, handleLogin, handleLogout}}>
            <LoginForm />
            <LogoutButton />
        </AuthContext.Provider>
    )
}

export default UseContext4
