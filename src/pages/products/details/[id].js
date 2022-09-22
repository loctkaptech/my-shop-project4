import { Box } from '@mui/material';
import { getProductItem } from 'apis/fetchers/getProductItem';
import ProductDetailsTemplate from 'templates/products/details/ProductDetailsTemplate';

const ProductItem = ({ product }) => {
  return (
    <Box>
      <ProductDetailsTemplate product={product} />
    </Box>
  );
};

export default ProductItem;

export async function getServerSideProps(context) {
  const productRes = await getProductItem(context.query.id);
  return {
    props: {
      product: productRes.data.data,
    },
  };
}
