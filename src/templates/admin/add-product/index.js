import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { addProduct } from 'apis/fetchers/addProduct';
import { getBrands } from 'apis/fetchers/getBrands';
import { getCategories } from 'apis/fetchers/getCategories';
import { getSizes } from 'apis/fetchers/getSizes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, sizeName, theme) {
  return {
    fontWeight:
      sizeName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AddProductTemplate = () => {
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);

  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [selectCategory, setSelectCategory] = useState('');
  const [selectBrand, setSelectBrand] = useState('');
  const [selectSizes, setSelectSizes] = useState([]);

  const [inStock, setInStock] = useState(true);

  const [images, setImages] = useState([]);

  const handleChangeCategory = (e) => {
    setSelectCategory(e.target.value);
  };
  const handleChangeBrand = (e) => {
    setSelectBrand(e.target.value);
  };

  const handleChangeInStock = (e) => {
    setInStock(!inStock);
  };

  const handleChangeSizes = (event) => {
    const {
      target: { value },
    } = event;
    setSelectSizes(typeof value === 'string' ? value.split(',') : value);
  };

  const handleUpload = () => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dgrzlzx6f',
        uploadPreset: 'myshop',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Done! Here is the image info: ', result.info);
          setImages((preImages) => [...preImages, result.info.url]);
        }
      }
    );
    myWidget.open();
  };

  const handleAddProduct = async () => {
    if (
      productCode === '' ||
      productName === '' ||
      price === '' ||
      description === '' ||
      images.length === 0
    ) {
      enqueueSnackbar('Please fill in all fields and upload images', {
        variant: 'error',
      });
      return;
    }

    const newProduct = {
      productCode,
      productName,
      price,
      description,
      mainImage: images[0],
      inStock,
      categoryId: Number(selectCategory),
      brandId: Number(selectBrand),
      imageList: images.slice(1),
      sizeIds: selectSizes,
    };
    try {
      const res = await addProduct(newProduct);
      if (res.data.status === 'ok') {
        enqueueSnackbar(res.data.message, {
          variant: 'success',
        });
        router.push('/admin/dash-broad');
      }
    } catch (err) {
      enqueueSnackbar(err.response.data.message, {
        variant: 'error',
      });
    }
  };

  const fetchData = async () => {
    const [categoriesRes, brandsRes, sizesRes] = await Promise.all([
      getCategories(),
      getBrands(),
      getSizes(),
    ]);

    setCategories(categoriesRes.data.data);
    setBrands(brandsRes.data.data);
    setSizes(sizesRes.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectCategory(categories[0].id);
    }
  }, [categories]);
  useEffect(() => {
    if (brands.length > 0) {
      setSelectBrand(brands[0].id);
    }
  }, [brands]);

  useEffect(() => {
    if (sizes.length > 0) {
      setSelectSizes([sizes[0].id]);
    }
  }, [sizes]);

  return (
    <Box>
      <Typography variant='h3' align='center' gutterBottom>
        Please fill in form bellow to add product
      </Typography>

      <TextField
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        fullWidth
        label='Product name'
        margin='normal'
      />

      <TextField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        label='Product description'
        margin='normal'
        multiline
        minRows={5}
      />

      <TextField
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        fullWidth
        label='Price'
        margin='normal'
      />

      <TextField
        value={productCode}
        onChange={(e) => setProductCode(e.target.value)}
        fullWidth
        label='Product Code'
        margin='normal'
      />

      <FormControl variant='filled' fullWidth margin='normal'>
        <InputLabel id='select-category'>Select a category</InputLabel>
        <Select
          labelId='select-category'
          id='demo-simple-select-filled'
          value={selectCategory}
          onChange={handleChangeCategory}
        >
          {categories.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant='filled' fullWidth margin='normal'>
        <InputLabel id='select-brand'>Select a brand</InputLabel>
        <Select
          labelId='select-brand'
          id='demo-simple-select-filled'
          value={selectBrand}
          onChange={handleChangeBrand}
        >
          {brands.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ my: 2 }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={inStock} onChange={handleChangeInStock} />
            }
            label='In stock'
          />
        </FormGroup>
      </Box>

      <Box sx={{ my: 2 }}>
        <FormControl sx={{ width: 300 }}>
          <InputLabel id='demo-multiple-name-label'>Select sizes</InputLabel>
          <Select
            labelId='demo-multiple-name-label'
            id='demo-multiple-name'
            multiple
            value={selectSizes}
            onChange={handleChangeSizes}
            input={<OutlinedInput label='Select sizes' />}
            MenuProps={MenuProps}
          >
            {sizes.map(({ id, name }) => (
              <MenuItem
                key={id}
                value={id}
                style={getStyles(name, selectSizes, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Typography variant='h5' gutterBottom>
        Upload images{' '}
        <Button
          variant='outlined'
          onClick={handleUpload}
          id='upload_widget'
          className='cloudinary-button'
        >
          Upload
        </Button>
      </Typography>

      <Typography gutterBottom>Uploaded images</Typography>
      <Grid container spacing={2}>
        {images.map((url, idx) => (
          <Grid
            item
            xs={12}
            md={3}
            lg={2}
            key={url}
            sx={{ aspectRatio: '3/2' }}
          >
            <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                src={url}
                width={200}
                height={150}
                alt={`uploaded image ${idx}`}
                layout='fill'
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ p: 8, textAlign: 'center' }}>
        <Button onClick={handleAddProduct} variant='contained' size='large'>
          Save
        </Button>
      </Box>
      <Script
        src='https://upload-widget.cloudinary.com/global/all.js'
        type='text/javascript'
      ></Script>
    </Box>
  );
};

export default AddProductTemplate;
