import React from 'react';
import { Link as MuiLink, useTheme } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';


const Link = ({ href, children, ...rest }) => {
  const router = useRouter();
  const theme = useTheme();

  const activeColor =
    theme.palette.mode === 'dark'
      ? theme.palette.secondary.main
      : "white";
  const inActiveColor =
    theme.palette.mode === 'dark'
      ? theme.palette.secondary.light
      : '#c4c3c2';
  return (
    <NextLink href={href} passHref>
      <MuiLink
        {...rest}
        underline='none'
        sx={{
          color: router.asPath === href ? activeColor : inActiveColor,
        }}
      >
        {children}
      </MuiLink>
    </NextLink>
  );
};

export default Link;
