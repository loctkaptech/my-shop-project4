import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const RowItem = ({ item }) => {
  const { id, mainImage, name, description, price, amount } = item;
  return (
    <Stack direction='row' spacing={2} alignItems='center' width='100%'>
      <Box
        width={150}
        height={150}
        sx={{
          aspectRatio: '1/1',
        }}
      >
        <Image
          style={{ borderRadius: '4px' }}
          width={150}
          height={150}
          src={mainImage}
          layout='responsive'
          alt='random'
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
          variant='h5'
          gutterBottom
        >
          {name}
        </Typography>
        <Typography
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
          gutterBottom
        >
          {description}
        </Typography>
        <Typography gutterBottom variant='h6'>
          {price} &#8363; x {amount}
        </Typography>
      </Box>
    </Stack>
  );
};

export default RowItem;
