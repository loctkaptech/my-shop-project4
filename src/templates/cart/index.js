import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useCallback, useContext, useEffect, useState } from 'react';

import { getProductById } from 'apis/fetchers/getProductById';
import { useSnackbar } from 'notistack';

import RowItem from 'components/RowItem';
import { useRouter } from 'next/router';
import { Delete } from '@mui/icons-material';
import { LayoutContext } from 'layouts/MainLayout';

const CartTemplate = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const cartContext = useContext(LayoutContext);

  const [itemsStorage, setItemsStorage] = useState([]);
  const [items, setItems] = useState([]);

  const fetchItemsInCart = useCallback(
    async (ids, itemsStorage) => {
      try {
        const productsPromises = ids.map((id) => getProductById(id));
        const resultRes = await Promise.all(productsPromises);
        const getAmount = (compareItem) =>
          itemsStorage.find((item) => compareItem.id === item.id)?.amount;
        setItems(
          resultRes.map((result) => ({
            ...result.data.data,
            amount: getAmount(result.data.data),
          }))
        );
      } catch (error) {
        enqueueSnackbar('An error occurred!');
      }
    },
    [enqueueSnackbar]
  );

  const handleClickCheckOut = () => {
    const queryStr = items
      .map(
        (prd, idx) =>
          `${prd.id}=${prd.amount}${idx === items.length - 1 ? '' : '&'}`
      )
      .join('');
    router.push(`/checkout?${queryStr}`);
  };

  const handleDeleteCartItem = (id) => {
    // remove in context
    const cloneCartItems = [...cartContext.itemsInCart];
    cloneCartItems.splice(
      cloneCartItems.findIndex((item) => Number(item.id) === Number(id)),
      1
    );
    cartContext.setItemsInCart(cloneCartItems);

    // remove in localStorage
    const itemsStorage = localStorage.getItem('items');
    const parsedItems = JSON.parse(itemsStorage);
    const idxToRemove = parsedItems.findIndex(
      (item) => Number(item.id) === Number(id)
    );
    parsedItems.splice(idxToRemove, 1);
    localStorage.setItem('items', JSON.stringify(parsedItems));

    // remove display item from state
    const cloneItemData = [...items];
    cloneItemData.splice(
      cloneItemData.findIndex((item) => Number(item.id) === Number(id)),
      1
    );
    setItems(cloneItemData);
  };

  useEffect(() => {
    const itemsStorage = localStorage.getItem('items');
    if (itemsStorage) {
      const parseItems = JSON.parse(itemsStorage);

      const ids = parseItems.map((item) => item.id);
      setItemsStorage(parseItems);

      fetchItemsInCart(ids, parseItems);
    }
  }, [fetchItemsInCart]);

  if (items.length === 0) {
    return (
      <Typography align='center' variant='h4'>
        No items in cart
      </Typography>
    );
  }

  return (
    <Box sx={{ mb: 5 }}>
      <Typography align='center' variant='h4'>
        Your shopping cart
      </Typography>
      <Box
        sx={{
          maxWidth: {
            lg: '800px',
          },
          mx: 'auto',
        }}
      >
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {items.map((item) => (
            <ListItem
              secondaryAction={
                <IconButton
                  onClick={() => handleDeleteCartItem(item.id)}
                  edge='end'
                  aria-label='delete'
                >
                  <Delete />
                </IconButton>
              }
              key={item.id}
              divider
            >
              <Box sx={{ mb: 2, mt: 3, width: '100%' }}>
                <RowItem item={item} />
              </Box>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 4 }}>
          <Button
            onClick={handleClickCheckOut}
            fullWidth
            sx={{
              backgroundImage: 'linear-gradient(to right, #8360c3, #2ebf91)',
              py: 3,
              color: 'white',
              fontSize: '1.3rem',
              lineHeight: '1.5rem',
            }}
          >
            Check out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartTemplate;
