import AddIcon from '@mui/icons-material/Add';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RemoveIcon from '@mui/icons-material/Remove';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useContext, useState } from 'react';

import PageSectionContent from 'components/PageSectionContent';
import PageSectionTitle from 'components/PageSectionTitle';
import ProductCard from 'components/ProductCard';
import SliderReactSlick from 'components/SliderReactSlick';
import { useRouter } from 'next/router';
import { LayoutContext } from 'layouts/MainLayout';
import { useSnackbar } from 'notistack';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ProductDetailsTemplate = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const layoutContext = useContext(LayoutContext);

  const [showSrcImageIdx, setShowSrcImageIdx] = useState(0);

  const { id, name, mainImage, images, price, description } = product;

  const thumbnails = [mainImage, ...images.map((img) => img.path)];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIncreaseAmount = () => {
    setAmount((preAmount) => preAmount + 1);
  };
  const handleDecreaseAmount = () => {
    if (amount === 1) {
      return;
    }
    setAmount((preAmount) => preAmount - 1);
  };

  const handleClickPlaceOrder = () => {
    router.push(`/checkout?${id}=${amount}`);
  };

  const handleClickThumbnailImg = (idx) => {
    setShowSrcImageIdx(idx);
  };

  const handleAddToCart = () => {
    const newItem = { id, amount };
    const itemsInCart = localStorage.getItem('items');
    if (itemsInCart) {
      const items = JSON.parse(itemsInCart);
      if (items.find((it) => it.id === newItem.id)) {
        enqueueSnackbar('item exists', { variant: 'error' });
      } else {
        const newItems = [...items, newItem];
        localStorage.setItem('items', JSON.stringify(newItems));
        layoutContext.setItemsInCart(newItems);
        enqueueSnackbar('item added', { variant: 'success' });
      }
    } else {
      localStorage.setItem('items', JSON.stringify([newItem]));
      layoutContext.setItemsInCart([newItem]);
      enqueueSnackbar('item added', { variant: 'success' });
    }
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box sx={{ position: 'relative', aspectRatio: '1/1' }}>
            <Image
              src={thumbnails[showSrcImageIdx]}
              layout='fill'
              alt='test'
              objectFit='contain'
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Stack direction='row' justifyContent='center' spacing={2}>
              {thumbnails.map((img, idx) => {
                return (
                  <Box
                    sx={{
                      background: idx === showSrcImageIdx ? '#90caf9' : 'none',
                      p: '2px',
                    }}
                    key={idx}
                  >
                    <Box
                      onClick={() => handleClickThumbnailImg(idx)}
                      width={100}
                      height={100}
                      sx={{
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-out',
                        cursor: 'pointer',
                        '&:hover': {
                          '& > div': {
                            transition: 'all 0.3s ease-out',
                            transform: 'scale(1.2)',
                          },
                        },
                        '&:not(:hover)': {
                          '& > div': {
                            transition: 'all 0.3s ease-out',
                            transform: 'scale(1)',
                          },
                        },
                      }}
                    >
                      <Box sx={{ position: 'relative', aspectRatio: '1/1' }}>
                        <Image
                          src={img}
                          layout='fill'
                          alt='test'
                          objectFit='cover'
                        />
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant='h3' gutterBottom>
            {name}
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            Status: In stock
          </Typography>
          <Typography variant='h4'>{price} &#8363;</Typography>
          <Divider sx={{ margin: '30px 0' }} />
          <Typography paragraph>{description}</Typography>
          <Divider sx={{ margin: '30px 0' }} />
          <Typography gutterBottom>Amount:</Typography>
          <Stack
            display='inline-flex'
            sx={{ border: '1px solid', p: 2, borderColor: 'primary.dark' }}
            direction='row'
            spacing={2}
            alignItems='center'
          >
            <IconButton size='small' onClick={handleDecreaseAmount}>
              <RemoveIcon />
            </IconButton>
            <Typography variant='h5'>{amount}</Typography>
            <IconButton size='small' onClick={handleIncreaseAmount}>
              <AddIcon />
            </IconButton>
          </Stack>
          <Box sx={{ mt: 3 }}>
            <Button onClick={handleAddToCart} size='large' variant='contained'>
              Add to cart
            </Button>
            <Button
              onClick={handleClickPlaceOrder}
              sx={{ ml: 3 }}
              size='large'
              variant='contained'
            >
              Place order
            </Button>
          </Box>
          <Typography sx={{ mt: 3 }}>
            Call to order: 0123456789 to quickly order
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Stack direction='row' spacing={2} alignItems='center'>
              <LocalShippingIcon fontSize='large' />
              <Box>
                <Typography variant='h5'>Nationwide Delivery</Typography>
                <Typography variant='subtitle2'>
                  Nationwide delivery with the best price
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack direction='row' spacing={2} alignItems='center'>
              <SupportAgentIcon fontSize='large' />
              <Box>
                <Typography variant='h5'>Customer support</Typography>
                <Typography variant='subtitle2'>
                  24/7 Customer Support - Call us
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack direction='row' spacing={2} alignItems='center'>
              <CardGiftcardIcon fontSize='large' />
              <Box>
                <Typography variant='h5'>Buy goods at a discount</Typography>
                <Typography variant='subtitle2'>
                  Opportunity to receive special offers and shocking prices at
                  the weekend
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 8 }}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Product Description' {...a11yProps(0)} />
              <Tab label='Comments on the product' {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Description
          </TabPanel>
          <TabPanel value={value} index={1}>
            Comments
          </TabPanel>
        </Box>
      </Box>

      <Box sx={{ mt: 8 }}>
        <PageSectionTitle title='RELATED PRODUCTS' />
        <PageSectionContent>
          <SliderReactSlick>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ProductCard key={item} item={item} />
            ))}
          </SliderReactSlick>
        </PageSectionContent>
      </Box>
    </Box>
  );
};

export default ProductDetailsTemplate;
