import myShopAxios from 'apis/axiosConfig';

export const getLatestProducts = () => {
  return myShopAxios.get('/products');
};
