import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({ item }) => {
  return (
    <Box
      key={item}
      sx={{
        px: {
          xs: 1,
          md: 2,
        },
      }}
    >
      <Card>
        <CardActionArea>
          <CardMedia sx={{ height: '200px' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <Image
                src='https://picsum.photos/300/200'
                layout='fill'
                objectFit='cover'
                alt='random image'
              />
            </div>
          </CardMedia>
          <CardContent>
            <Typography variant='h5' component='div' gutterBottom>
              Product name {item}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              description
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              code
            </Typography>
            <Typography variant='body2'>1.000.000 &#8363;</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ProductCard;
