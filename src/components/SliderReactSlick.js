import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Slider from 'react-slick';

const SliderReactSlick = ({ list = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {list.map((item) => (
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
              <CardMedia
                component='img'
                height='200'
                image='https://picsum.photos/seed/picsum/300/300'
                alt='random image'
              />
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
            </Card>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default SliderReactSlick;
