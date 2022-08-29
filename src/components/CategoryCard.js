import { Box, CardActionArea, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import CategoryImage1 from 'assets/images/180-720x400.jpg';

const CategoryCard = () => {
  return (
    <>
      <CardActionArea sx={{ borderRadius: '7px' }}>
        <Box>
          <Image
            style={{ borderRadius: '7px' }}
            src={CategoryImage1}
            layout='responsive'
            alt='random image'
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(51, 51, 51, 0.4)',
            padding: '12px 25px',
          }}
        >
          <Typography
            variant='caption'
            color='white'
            sx={{ textTransform: 'uppercase', whiteSpace: 'nowrap' }}
          >
            Nike
          </Typography>
          <Typography
            variant='h4'
            color='white'
            sx={{ textTransform: 'uppercase', whiteSpace: 'nowrap' }}
          >
            Category 1
          </Typography>
        </Box>
      </CardActionArea>
    </>
  );
};

export default CategoryCard;
