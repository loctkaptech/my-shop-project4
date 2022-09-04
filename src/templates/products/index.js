import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import ProductCard from 'components/ProductCard';

const ProductsTemplate = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ mt: 3 }}>
            <Typography variant='h5' gutterBottom>
              Categories
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Men's shoes" />
              <FormControlLabel control={<Checkbox />} label="Women's Shoes" />
              <FormControlLabel control={<Checkbox />} label='Adidas shoes' />
              <FormControlLabel control={<Checkbox />} label='NIKE Shoes' />
            </FormGroup>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant='h5' gutterBottom>
              Trademark
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label='adidas' />
              <FormControlLabel control={<Checkbox />} label='Nike' />
            </FormGroup>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant='h5' gutterBottom>
              Price range
            </Typography>
            <FormControl>
              <RadioGroup>
                <FormControlLabel
                  value='0-500.000'
                  control={<Radio />}
                  label='500.000 - 1.000.000'
                />
                <FormControlLabel
                  value='500000-1000000'
                  control={<Radio />}
                  label='500.000 - 1.000.000'
                />
                <FormControlLabel
                  value='1000000-1500000'
                  control={<Radio />}
                  label='1.000.000 - 1.500.000'
                />
                <FormControlLabel
                  value='1500000'
                  control={<Radio />}
                  label='Above 1.500.000'
                />
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box>
            <Stack direction='row' spacing={8} alignItems='center'>
              <Typography variant='h4'>All products</Typography>
              <Box>
                <FormControl>
                  <FormLabel id='priority-view'>Priority viewing</FormLabel>
                  <RadioGroup row={true}>
                    <FormControlLabel
                      value='new-products'
                      control={<Radio />}
                      label='New products'
                    />
                    <FormControlLabel
                      value='oldest-products'
                      control={<Radio />}
                      label='Oldest products'
                    />
                    <FormControlLabel
                      value='price-up'
                      control={<Radio />}
                      label='Prices go up'
                    />
                    <FormControlLabel
                      value='price-down'
                      control={<Radio />}
                      label='Prices go down'
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Stack>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box>
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6, 7 ,8].map((item) => (
                <Grid item key={item} xs={12} md={6} lg={4}>
                  <ProductCard removeSpacing item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsTemplate;
