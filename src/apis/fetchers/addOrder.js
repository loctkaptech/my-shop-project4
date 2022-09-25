import myShopAxios from 'apis/axiosConfig';

export const addOrder = (order) => {
  return myShopAxios.post('/orders', order);
};
