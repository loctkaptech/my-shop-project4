import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { getBrands } from 'apis/fetchers/getBrands';
import { getCategories } from 'apis/fetchers/getCategories';
import { getFilterProducts } from 'apis/fetchers/getFilterProducts';
import ProductCard from 'components/ProductCard';
import { useCallback, useEffect, useState } from 'react';

const ProductsTemplate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedRange, setSelectedRange] = useState('');

  const handleFetchCategories = async () => {
    try {
      setLoading(true);
      const categoriesRes = await getCategories();
      setError('');
      setLoading(false);
      setCategories(categoriesRes.data.data);
    } catch (error) {
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const handleFetchBrands = async () => {
    try {
      setLoading(true);
      const brandsRes = await getBrands();
      setError('');
      setLoading(false);
      setBrands(brandsRes.data.data);
    } catch (error) {
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };
  const handleFetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const productsRes = await getFilterProducts({
        categoryId: selectedCategory || undefined,
        brandId: selectedBrand || undefined,
        priceRange: selectedRange || undefined,
      });
      setError('');
      setLoading(false);
      setProducts(productsRes.data.data);
    } catch (error) {
      if (error.response.data.message === 'No products found') {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong!');
      }
    } finally {
      setLoading(false);
    }
  }, [selectedBrand, selectedCategory, selectedRange]);

  const handleClearFilter = () => {
    setSelectedBrand('');
    setSelectedRange('');
    setSelectedCategory('');
  };

  useEffect(() => {
    handleFetchBrands();
    handleFetchCategories();
  }, []);

  useEffect(() => {
    handleFetchProducts();
  }, [handleFetchProducts]);

  return (
    <Box>
      <Box sx={{ height: '32px' }}>
        {(selectedBrand || selectedCategory || selectedRange) && (
          <Button onClick={handleClearFilter} size='small' variant='contained'>
            Clear filter
          </Button>
        )}
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box sx={{ mt: 3 }}>
            <Typography variant='h5' gutterBottom>
              Categories
            </Typography>
            {/* <FormGroup>
              {categories.map((category, idx) => {
                return (
                  <FormControlLabel
                    key={category.id}
                    control={<Radio />}
                    label={category.name}
                  />
                );
              })}
            </FormGroup> */}
            <FormControl>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                name='radio-buttons-group'
              >
                {categories.map((cate) => (
                  <FormControlLabel
                    key={cate.id}
                    value={cate.id}
                    control={<Radio />}
                    label={cate.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant='h5' gutterBottom>
              Trademark
            </Typography>
            {/* <FormGroup>
              {brands.map((brand, idx) => {
                return (
                  <FormControlLabel
                    value={brand.id}
                    key={brand.id}
                    control={<Checkbox />}
                    label={brand.name}
                  />
                );
              })}
            </FormGroup> */}

            <FormControl>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                name='radio-buttons-group'
              >
                {brands.map((brand) => (
                  <FormControlLabel
                    key={brand.id}
                    value={brand.id}
                    control={<Radio />}
                    label={brand.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant='h5' gutterBottom>
              Price range
            </Typography>
            <FormControl>
              <RadioGroup
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
              >
                <FormControlLabel
                  value='0-500000'
                  control={<Radio />}
                  label='0 - 500.000'
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
            {loading ? (
              <CircularProgress />
            ) : error ? (
              <Alert severity='error'>{error}</Alert>
            ) : (
              <Grid container spacing={3}>
                {products.map((item) => (
                  <Grid item key={item.id} xs={12} md={6} lg={4}>
                    <ProductCard removeSpacing item={item} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsTemplate;
