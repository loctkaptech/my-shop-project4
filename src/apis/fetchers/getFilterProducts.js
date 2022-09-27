import myShopAxios from 'apis/axiosConfig';

// api/v1/products?categoryId=1&brandId=1&priceRange=2000000-3000000

export const getFilterProducts = (queryObj) => {
  return myShopAxios.get('/products', {
    params: queryObj,
  });
};
