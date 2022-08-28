import { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { lightTheme } from 'themes/light';
import { darkTheme } from 'themes/dark';
import MainLayout from 'layouts/MainLayout';
import { getColorPreference, setColorPreference } from 'themes/utils';

import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => {
    return mode === 'dark' ? darkTheme : lightTheme;
  }, [mode]);

  const toggleTheme = () => {
    const currentMode = mode === 'dark' ? 'light' : 'dark';
    setMode(currentMode);
    setColorPreference(currentMode);
  };

  useEffect(() => {
    const modeColor = getColorPreference();
    setMode(modeColor);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout toggleTheme={toggleTheme} mode={mode}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
