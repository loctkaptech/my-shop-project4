import myShopAxios from 'apis/axiosConfig';

export const getSizes = () => {
  return myShopAxios.get('/sizes');
};
