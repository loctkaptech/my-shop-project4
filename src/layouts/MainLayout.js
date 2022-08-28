import React from 'react';
import { Box, IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const MainLayout = ({ children, toggleTheme, mode }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box>
        Nav
        <IconButton
          title={mode === 'dark' ? 'Turn on light' : 'Turn on dark'}
          onClick={toggleTheme}
        >
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          px: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 0,
          },
          width: {
            xl: '1440px',
          },
          mx: {
            xl: 'auto',
          },
        }}
      >
        {children}
      </Box>
      <Box>
        <footer>footer</footer>
      </Box>
    </Box>
  );
};

export default MainLayout;
