import myShopAxios from 'apis/axiosConfig';

export const getProductById = (id) => {
  return myShopAxios.get(`/products/${id}`);
};
