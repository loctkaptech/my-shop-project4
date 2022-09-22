import axios from 'axios';

const myShopAxios = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
});

export default myShopAxios;
