import myShopAxios from "apis/axiosConfig";

export const addCategory = (category) => {
  return myShopAxios.post("/categories", category);
};
