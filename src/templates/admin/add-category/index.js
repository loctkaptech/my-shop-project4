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
import Script from 'next/script';
import { useSnackbar } from 'notistack';
import AddCategory from 'pages/admin/add-category';
import { useEffect, useState } from 'react';

const AddCategoryTemplate = () => {
    const [categoriesName, setCategoryname] = useState('');
    const [thumbnail, setThumbnail] = useState([]);
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [selectSizes, setSelectSizes] = useState([]);
    const handleAddCategory = async () => {
        if (
            categoriesName === '' ||
            description === '' ||
            thumbnail === '' ||
            images.length === 0
        ) {
            enqueueSnackbar('Please fill in all fields and adđ images', {
                variant: 'error',
            });
            return;
        }
        const newCategory = {
            categoriesName,
            thumbnail,
            description,
            mainImage: images[0],
            imageList: selectSizes,

        };
        try {
            const res = await AddCategory(newCategory);
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

    return (
        <Box>
            <Typography variant='h3' align='center' gutterBottom>
                Please fill in form bellow to add Categories
            </Typography>

            <TextField
                value={categoriesName}
                onChange={(e) => setCategoryname(e.target.value)}
                fullWidth
                label='Categorory Name'
                margin='normal'
            />

            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                label='Categories description'
                margin='normal'
                multiline
                minRows={5}
            />

            <TextField
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                fullWidth
                label='Thumbnails'
                margin='normal'
            />
            <Typography variant='h5' gutterBottom>
                Add images{' '}
                <Button
                    variant='outlined'
                    onClick={handleUpload}
                    id='upload_widget'
                    className='cloudinary-button'
                >
                    Add
                </Button>
            </Typography>

            <Typography gutterBottom>Add Images</Typography>
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
                <Button onClick={handleAddCategory} variant='contained' size='large'>
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
export default AddCategoryTemplate;