import myShopAxios from 'apis/axiosConfig';

export const getProductItem = (id) => {
  return myShopAxios.get(`/products/${id}`);
};
