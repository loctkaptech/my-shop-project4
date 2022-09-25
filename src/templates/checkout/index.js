import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  List,
  ListItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { addOrder } from 'apis/fetchers/addOrder';
import { getProductById } from 'apis/fetchers/getProductById';
import RowItem from 'components/RowItem';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';

const CheckoutTemplate = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const [items, setItems] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryInstruction, setDeliveryInstruction] = useState();
  const [paymentTypeId, setPaymentTypeId] = useState(1);

  const fetchItems = useCallback(async () => {
    try {
      const itemsObj = router.query;
      const productsPromises = Object.keys(itemsObj).map((id) =>
        getProductById(id)
      );

      const resultRes = await Promise.all(productsPromises);

      const getAmount = (compareItem) => {
        return itemsObj[compareItem.id];
      };
      setItems(
        resultRes.map((result) => ({
          ...result.data.data,
          amount: getAmount(result.data.data),
        }))
      );
    } catch (error) {
      enqueueSnackbar('An error occurred!', { variant: 'error' });
    }
  }, [enqueueSnackbar, router.query]);

  const calculatePrice = () => {
    if (items.length > 0) {
      return items
        .reduce((curr, acc) => {
          return Number(acc.price) * Number(acc.amount) + curr;
        }, 0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return 0;
  };

  const handleAddOrder = async () => {
    if (firstName === '' || lastName === '' || phone === '' || address === '') {
      enqueueSnackbar('Please fill in all fields', {
        variant: 'error',
      });
      return;
    }

    const newOrder = {
      firstName,
      lastName,
      phone,
      address,
      shipping: '',
      productList: items.map((item) => ({
        productId: item.id,
        unitPrice: Number(item.price),
        quantity: Number(item.amount),
      })),
      paymentTypeId,
      deliveryInstruction,
    };
    try {
      const res = await addOrder(newOrder);
      if (res.data.status === 'ok') {
        enqueueSnackbar(res.data.message, {
          variant: 'success',
        });
      }
    } catch (err) {
      enqueueSnackbar(err.response.data.message, {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant='h3' align='center' gutterBottom>
        Check out
      </Typography>
      <Grid container spacing={{ xs: 3, md: 4, xl: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography gutterBottom>
            Please fill in these fields below
          </Typography>
          <TextField
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            label='First name'
            fullWidth
            margin='normal'
          />
          <TextField
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            label='Last name'
            fullWidth
            margin='normal'
          />
          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label='Phone number'
            fullWidth
            margin='normal'
          />
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
                value={paymentTypeId}
                onChange={(e) => setPaymentTypeId(Number(e.target.value))}
                name='radio-buttons-group'
              >
                <FormControlLabel
                  value={1}
                  control={<Radio />}
                  label='Check / Money'
                />
                <FormControlLabel
                  value={2}
                  control={<Radio />}
                  label='Credit card'
                />
                <FormControlLabel
                  value={3}
                  control={<Radio />}
                  label='PayPal'
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography gutterBottom>Order Summary</Typography>

          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {items.map((item, idx) => (
              <ListItem key={item.id} divider>
                <Box sx={{ mb: 2, mt: idx === 0 ? 0 : 3 }}>
                  <RowItem item={item} />
                </Box>
              </ListItem>
            ))}
          </List>

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
                {calculatePrice()} &#8363;
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
            value={deliveryInstruction}
            onChange={(e) => setDeliveryInstruction(e.target.value)}
            sx={{ mt: 4 }}
            label='Special delivery instruction'
            multiline
            rows={5}
            fullWidth
          />

          <Box sx={{ mt: 4 }}>
            <Button
              onClick={handleAddOrder}
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
