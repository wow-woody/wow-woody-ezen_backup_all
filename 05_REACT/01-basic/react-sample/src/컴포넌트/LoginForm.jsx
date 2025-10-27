import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthConText';

const LoginForm = () => {
    const {handleLogin} = useContext(AuthContext);
    return (
        <div>
            <button onClick={() => handleLogin('홍길동')}>
                로그인
            </button>
        </div>
    )
}

export default LoginForm
