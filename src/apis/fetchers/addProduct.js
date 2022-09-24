import myShopAxios from 'apis/axiosConfig';

export const addProduct = (product) => {
  return myShopAxios.post('/products', product);
};
