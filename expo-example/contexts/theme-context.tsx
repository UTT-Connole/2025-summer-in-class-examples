import { createContext, useState } from 'react';

const ThemeContext = createContext('lightblue');

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('lightblue');
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  );
}

export {ThemeContext, ThemeProvider};