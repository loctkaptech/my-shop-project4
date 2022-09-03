import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';

import CopyrightIcon from '@mui/icons-material/Copyright';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Container } from '@mui/system';
import { useRouter } from 'next/router';

import Link from 'components/Link';

const MainLayout = ({ children, toggleTheme, mode }) => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pages = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Login',
      href: '/login',
    },
    {
      name: 'Signup',
      href: '/signup',
    },
  ];
  const settings = ['Profile'];
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <ShoppingBagIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant='h6'
              noWrap
              component={Link}
              href='/'
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

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    {/* <Typography textAlign='center'>{page}</Typography> */}
                    <Link href={page.href}>{page.name}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <ShoppingBagIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
            <Typography
              variant='h5'
              noWrap
              component={Link}
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              MyShop
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Box sx={{ mr: 3 }} key={page.name}>
                  <Link href={page.href}>{page.name}</Link>
                </Box>
              ))}
            </Box>
            <IconButton
              title={mode === 'dark' ? 'Turn on light' : 'Turn on dark'}
              onClick={toggleTheme}
            >
              {mode === 'dark' ? (
                <LightModeIcon color='secondary' />
              ) : (
                <DarkModeIcon color='secondary' />
              )}
            </IconButton>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='User Name' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          flexGrow: 1,
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
      <Box sx={{ p: 2 }}>
        <footer>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CopyrightIcon /> <Typography>My Shop</Typography>
          </Box>
        </footer>
      </Box>
    </Box>
  );
};

export default MainLayout;
