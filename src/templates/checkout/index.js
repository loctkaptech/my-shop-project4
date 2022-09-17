import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const CheckoutTemplate = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Box>
      <Typography variant='h3' align='center' gutterBottom>
        Check out
      </Typography>
      <Grid container spacing={{ xs: 3, md: 4, xl: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom>
            Please fill in these fields below
          </Typography>
          <TextField label='First name' fullWidth margin='normal' />
          <TextField label='Last name' fullWidth margin='normal' />
          <TextField label='Phone number' fullWidth margin='normal' />
          <TextField
            label='Address'
            fullWidth
            margin='normal'
            multiline
            rows={4}
          />
          <Box sx={{ mt: 2 }}>
            <FormControl>
              <FormLabel id='payment-methods'>Payment methods</FormLabel>
              <RadioGroup
                aria-labelledby='payment-methods'
                defaultValue='female'
                name='radio-buttons-group'
              >
                <FormControlLabel
                  value='check-money'
                  control={<Radio />}
                  label='Check / Money'
                />
                <FormControlLabel
                  value='credit-card'
                  control={<Radio />}
                  label='Credit card'
                />
                <FormControlLabel
                  value='paypal'
                  control={<Radio />}
                  label='PayPal'
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography gutterBottom>Order Summary</Typography>

          <Box sx={{ mb: 2, mt: 3 }}>
            <Stack direction='row' spacing={2} alignItems='center'>
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
                  src='https://picsum.photos/200/200'
                  layout='responsive'
                  alt='random'
                />
              </Box>
              <Box>
                <Typography variant='h5' gutterBottom>
                  ANTONI FERNANDO DRIVER SHOES AF.4020 MEN SHOES
                </Typography>
                <Typography gutterBottom>Description</Typography>
                <Typography gutterBottom variant='h6'>
                  1.000.000
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Stack direction='row' spacing={2} alignItems='center'>
              <Box width={150} height={150} sx={{ aspectRatio: '1/1' }}>
                <Image
                  style={{ borderRadius: '4px' }}
                  width={150}
                  height={150}
                  src='https://picsum.photos/200/200'
                  layout='responsive'
                  alt='random'
                />
              </Box>
              <Box>
                <Typography variant='h5' gutterBottom>
                  ANTONI FERNANDO DRIVER SHOES AF.4020 MEN SHOES
                </Typography>
                <Typography gutterBottom>Description</Typography>
                <Typography gutterBottom variant='h6'>
                  1.000.000
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{
              border: '1px solid rgb(118, 118, 118)',
              p: 2,
              borderRadius: '4px',
            }}
          >
            <Stack
              direction='row'
              justifyContent='space-between'
              flexWrap='wrap'
            >
              <Typography gutterBottom sx={{ flex: 'auto', width: '50%' }}>
                Sub total
              </Typography>
              <Typography
                gutterBottom
                sx={{ flex: 'auto', width: '50%', textAlign: 'right' }}
              >
                10000000
              </Typography>
              <Typography gutterBottom sx={{ flex: 'auto', width: '50%' }}>
                Shipping
              </Typography>
              <Typography
                gutterBottom
                sx={{ flex: 'auto', width: '50%', textAlign: 'right' }}
              >
                None
              </Typography>
            </Stack>
          </Box>

          <TextField
            sx={{ mt: 4 }}
            label='Special delivery instruction'
            multiline
            rows={5}
            fullWidth
          />

          <Box sx={{ mt: 4 }}>
            <Button
              fullWidth
              sx={{
                backgroundImage: 'linear-gradient(to right, #8360c3, #2ebf91)',
                py: 3,
                color: 'white',
                fontSize: '1.3rem',
                lineHeight: '1.5rem',
              }}
            >
              Order
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutTemplate;
