import React, { useContext, ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
// import { ThemeContext } from '../contexts/theme-context';

interface ThemeTextProps {
  children: ReactNode;
  style?: TextStyle;
}

const ThemeText: React.FC<ThemeTextProps> = ({ children, style }) => {
  
  return (
    <Text style={[{ color: 'green' }, style]}>
      {children}
    </Text>
  );
};

export default ThemeText;