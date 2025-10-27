import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const ThemeShow = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div>
      <h1 className={theme}>현재 테마 : {theme}</h1>
    </div>
  )
}

export default ThemeShow
