import React from 'react';
import { Box, Typography } from '@mui/material';

const PageSectionTitle = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h4'>{title}</Typography>
      <Box
        sx={{
          height: '5px',
          width: '100px',
          backgroundColor: 'secondary.main',
          mt: 1,
        }}
      />
    </Box>
  );
};

export default PageSectionTitle;
