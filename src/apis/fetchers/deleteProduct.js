import myShopAxios from 'apis/axiosConfig';

export const deleteProduct = (productId) => {
  return myShopAxios.delete(`/products/${productId}`);
};
