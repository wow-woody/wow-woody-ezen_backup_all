import React, { useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import ThemeShow from './ThemeShow';
import ThemeButton from './ThemeButton';

const UseContext3 = () => {
    const [theme, setTheme] = useState('light');
    const handleToggle = () => {
        setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
    }
    return (
     <ThemeContext.Provider value={{theme, handleToggle}}>
        <ThemeShow />
        <ThemeButton />
     </ThemeContext.Provider>
    )
}

export default UseContext3
