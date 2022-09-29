import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import { deleteCategory } from 'apis/fetchers/deleteCategory';
import { deleteProduct } from 'apis/fetchers/deleteProduct';
import { getCategories } from 'apis/fetchers/getCategories';
import { getProducts } from 'apis/fetchers/getProducts';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import CategoriesTable from 'templates/admin/dash-broad/CategoriesTable';
import ProductsTable from 'templates/admin/dash-broad/ProductsTable';

const DashBroadTemplate = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [showDialogDeleteProduct, setShowDialogDeleteProduct] = useState(false);
  const [willDeleteProduct, setWillDeleteProduct] = useState(null);
  const [showDialogDeleteCategory, setShowDialogDeleteCategory] =
    useState(false);
  const [willDeleteCategory, setWillDeleteCategory] = useState(null);

  const handleFetchCategories = async () => {
    try {
      setLoading(true);
      const categoriesRes = await getCategories();
      setCategories(categoriesRes.data.data);
    } catch (error) {
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const handleFetchProducts = async () => {
    try {
      setLoading(true);
      const productsRes = await getProducts();
      setProducts(productsRes.data.data);
    } catch (error) {
      setError('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = (product) => {
    setWillDeleteProduct(product);
    setShowDialogDeleteProduct(true);
  };

  const handleDeleteCategory = (product) => {
    setWillDeleteCategory(product);
    setShowDialogDeleteCategory(true);
  };

  const handleConfirmDeleteProduct = async () => {
    try {
      await deleteProduct(willDeleteProduct.id);
      enqueueSnackbar('Item deleted', {
        variant: 'success',
      });
      await handleFetchProducts();
      setShowDialogDeleteProduct(false);
    } catch (error) {
      enqueueSnackbar('Can not delete this item', {
        variant: 'error',
      });
    }
  };

  const handleConfirmDeleteCategory = async () => {
    try {
      await deleteCategory(willDeleteCategory.id);
      enqueueSnackbar('Item deleted', {
        variant: 'success',
      });
      await handleFetchCategories();
      setShowDialogDeleteCategory(false);
    } catch (error) {
      enqueueSnackbar('Can not delete this item', {
        variant: 'error',
      });
    }
  };

  useEffect(() => {
    handleFetchCategories();
    handleFetchProducts();
  }, []);

  return (
    <Box>
      <Typography gutterBottom variant='h3' align='center'>
        Dash broad
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant='h5' gutterBottom>
          Categories
        </Typography>
        <CategoriesTable
          categories={categories}
          deleteCategory={handleDeleteCategory}
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant='h5' gutterBottom>
          Products
        </Typography>
        <ProductsTable
          products={products}
          deleteProduct={handleDeleteProduct}
        />
      </Box>

      {showDialogDeleteCategory && (
        <Dialog
          open={showDialogDeleteCategory}
          onClose={() => setShowDialogDeleteCategory(false)}
        >
          <DialogTitle id='alert-dialog-title'>Confirm delete</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Do you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setShowDialogDeleteCategory(false)}
              autoFocus
            >
              Disagree
            </Button>
            <Button onClick={handleConfirmDeleteCategory}>Agree</Button>
          </DialogActions>
        </Dialog>
      )}

      {showDialogDeleteProduct && (
        <Dialog
          open={showDialogDeleteProduct}
          onClose={() => setShowDialogDeleteProduct(false)}
        >
          <DialogTitle id='alert-dialog-title'>Confirm delete</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Do you want to delete this item?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowDialogDeleteProduct(false)} autoFocus>
              Disagree
            </Button>
            <Button onClick={handleConfirmDeleteProduct}>Agree</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default DashBroadTemplate;
