
import { createContext } from 'react';

export const ThemeContext = createContext('');

const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={''}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
