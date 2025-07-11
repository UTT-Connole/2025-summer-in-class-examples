import { Stack } from "expo-router";
import {ThemeProvider} from '../contexts/theme-context';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
