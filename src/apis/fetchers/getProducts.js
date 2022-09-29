import myShopAxios from 'apis/axiosConfig';

export const getProducts = () => {
  return myShopAxios.get('/products');
};
