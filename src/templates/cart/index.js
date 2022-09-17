import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Stack,
  Button,
} from '@mui/material';

import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Image from 'next/image';
const CartTemplate = () => {
  return (
    <Box>
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
          {[1, 2, 3, 4].map((item) => (
            <ListItem key={item} divider>
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
            </ListItem>
          ))}
        </List>
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
            Check out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartTemplate;
