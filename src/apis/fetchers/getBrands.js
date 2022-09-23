import myShopAxios from "apis/axiosConfig";

export const getBrands = () => {
  return myShopAxios.get("/brands");
};
