import Slider from 'react-slick';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function ArrowNext(props) {
  const { onClick } = props;
  return (
    <IconButton
      size="small"
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: {
          xs: '-25px',
          md: '-40px',
          lg: '-50px'
        },
        transform: 'translateY(-50%)'
      }}
    >
      <ArrowForwardIosIcon fontSize='12px'/>
    </IconButton>
  );
}

function ArrowPrev(props) {
  const { onClick } = props;
  return (
    <IconButton
      size="small"
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left:{
          xs: '-25px',
          md: '-40px',
          lg: '-50px'
        },
        transform: 'translateY(-50%)'
      }}
    >
      <ArrowBackIosNewIcon fontSize='12px'/>
    </IconButton>
  );
}

const SliderReactSlick = ({ children, isSingle = false }) => {
  const settings = isSingle
    ? {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 7000,
        prevArrow: <ArrowPrev />,
        nextArrow: <ArrowNext />,
      }
    : {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow: <ArrowPrev />,
        nextArrow: <ArrowNext />,
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
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SliderReactSlick;
