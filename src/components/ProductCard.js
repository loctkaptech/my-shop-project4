import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { fontWeight } from '@mui/system';

const ProductCard = ({ item, removeSpacing = false }) => {
  const { id, name, description, mainImage, productCode, price } = item;
  const router = useRouter();
  return (
    <Box
      key={item}
      sx={{
        height: '440px',
        px: removeSpacing
          ? 0
          : {
              xs: 1,
              md: 2,
            },
        py: removeSpacing ? 0 : 1,
      }}
    >
      <Card>
        <CardActionArea onClick={() => router.push(`/products/details/${id}`)}>
          <CardMedia sx={{ height: '200px' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <Image
                src={mainImage}
                layout='fill'
                objectFit='cover'
                alt={name}
              />
            </div>
          </CardMedia>
          <CardContent>
            <Typography
              sx={{
                minHeight: '64px',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
              variant='h5'
              component='div'
              gutterBottom
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                display: '-webkit-box',
                WebkitLineClamp: '3',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
              color='text.secondary'
              gutterBottom
            >
              {description}
            </Typography>
            <Typography sx={{ mb: 1.5, fontWeight: 'bold' }}>
              {productCode}
            </Typography>
            <Typography variant='body2'>{price} &#8363;</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ProductCard;
