import { Box, IconButton, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function CategoriesTable({
  categories,
  deleteCategory,
  editCategory,
}) {
  const convertToTableData = (categories) => {
    return categories.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        thumbnail: item.thumbnail,
      };
    });
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell sx={{ width: '150px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {convertToTableData(categories).map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='left'>{row.description}</TableCell>
                <TableCell align='left'>
                  <IconButton
                    title='delete item'
                    onClick={() => deleteCategory(row)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  {/* <IconButton
                    title='edit item'
                    onClick={() => editCategory(row)}
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
        Totals: {categories.length}
      </Typography>
    </Box>
  );
}
