import myShopAxios from 'apis/axiosConfig';

export const deleteCategory = (categoryId) => {
  return myShopAxios.delete(`/categories/${categoryId}`);
};
