import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'components/Link';
import { SnackbarProvider } from 'notistack';
import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <SnackbarProvider maxSnack={3}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          height: '100vh',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant='h6'
            noWrap
            component={Link}
            href='/admin'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MyShop
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            pt: {
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
            },
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
      </Box>
    </SnackbarProvider>
  );
};

export default AdminLayout;
