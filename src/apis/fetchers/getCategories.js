import myShopAxios from 'apis/axiosConfig';

export const getCategories = () => {
  return myShopAxios.get('/categories');
};
