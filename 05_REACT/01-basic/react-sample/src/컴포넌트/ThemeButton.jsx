import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const ThemeButton = () => {

    const {theme, handleToggle} = useContext(ThemeContext);
  return (
    <div>
      <button onClick={handleToggle}>테마 변경</button>
    </div>
  )
}

export default ThemeButton
