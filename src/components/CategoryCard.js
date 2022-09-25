import { Box, CardActionArea, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
const CategoryCard = ({ category }) => {
  const { id, name, thumbnail } = category;

  return (
    <Box
      sx={{
        aspectRatio: '9/6',
        width: '100%',
        height: 'auto',
        position: 'relative',
      }}
    >
      <CardActionArea
        sx={{
          borderRadius: '7px',
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Box sx={{ height: '100%' }}>
          <Image
            style={{ borderRadius: '7px' }}
            src={thumbnail}
            layout='fill'
            alt={name}
            objectFit='cover'
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
          {/* <Typography
            variant='caption'
            color='white'
            sx={{ textTransform: 'uppercase', whiteSpace: 'nowrap' }}
          >
            Nike
          </Typography> */}
          <Typography
            variant='h4'
            color='white'
            sx={{ textTransform: 'uppercase', whiteSpace: 'nowrap' }}
          >
            {name}
          </Typography>
        </Box>
      </CardActionArea>
    </Box>
  );
};

export default CategoryCard;
