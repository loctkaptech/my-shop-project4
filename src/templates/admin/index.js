import { Box, Button, Typography } from '@mui/material';
import Link from 'components/Link';

const AdminTemplate = () => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        <Typography align='center' variant='h3' gutterBottom>
          Welcome to Myshop admin page
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button size='large'>
            <Link style={{ color: 'inherit' }} href='/admin/dash-broad'>
              View Dash broad
            </Link>
          </Button>
          <Button size='large'>
            <Link style={{ color: 'inherit' }} href='/admin/add-product'>
              Add product
            </Link>
          </Button>
          <Button size='large'>
            <Link style={{ color: 'inherit' }} href='/admin/add-category'>
              Add Category
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminTemplate;
