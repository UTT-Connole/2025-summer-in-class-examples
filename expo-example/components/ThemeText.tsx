import {useContext} from 'react';
import { Text } from 'react-native';
import {ThemeContext} from '../contexts/theme-context';

const ThemeText = ({ children }) => {
    const {theme} = useContext(ThemeContext);
    return <Text style={{ color: theme }}>{children}</Text>;
};

export default ThemeText;