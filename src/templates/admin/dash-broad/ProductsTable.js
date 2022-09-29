import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function ProductsTable({
  products,
  deleteProduct,
  editProduct,
}) {
  const convertToTableData = (productList) => {
    return productList.map((item) => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        code: item.productCode,
        category: item.category?.name,
        brand: item.brand?.name,
        inStock: item.inStock,
      };
    });
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '500px' }}>Name</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>In stock</TableCell>
              <TableCell sx={{ width: '150px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {convertToTableData(products).map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='left'>{row.code}</TableCell>
                <TableCell align='left'>{row.price}</TableCell>
                <TableCell align='left'>{row.category}</TableCell>
                <TableCell align='left'>{row.brand}</TableCell>
                <TableCell align='left'>{row.inStock ? 'yes' : 'no'}</TableCell>
                <TableCell align='left'>
                  <IconButton
                    title='delete item'
                    onClick={() => deleteProduct(row)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  {/* <IconButton
                    title='edit item'
                    onClick={() => editProduct(row)}
                  >
                    <EditIcon />
                  </IconButton> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography sx={{ mt: 1 }} align='right' variant='subtitle2'>
        Totals: {products.length}
      </Typography>
    </Box>
  );
}
