import { createContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: {primary: string; secondary: string};
  setTheme: (theme: {primary: string; secondary: string}) => void;
}

const themes = {
  lightblue: {primary: '#ADD8E6', secondary: '#B0E0E6'},
  darkblue: {primary: '#00008B', secondary: '#0000CD'},
  lightgreen: {primary: '#90EE90', secondary: '#8FBC8F'},
  darkgreen: {primary: '#006400', secondary: '#008000'},
  lightcoral: {primary: '#F08080', secondary: '#CD5C5C'},
  darkcoral: {primary: '#CD5C5C', secondary: '#8B0000'},
  lightgray: {primary: '#D3D3D3', secondary: '#A9A9A9'},
  darkgray: {primary: '#A9A9A9', secondary: '#696969'},
  lightyellow: {primary: '#FFFFE0', secondary: '#FFFACD'},
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes.lightblue,
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState(themes.lightblue);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };