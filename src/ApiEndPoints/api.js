import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const getCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/products/categories`);
  return response.data;
};

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

export const getProductById = async (productId) => {
  const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
  return response.data;
};

export const getCategoryProducts = async (category) => {
  const response = await axios.get(`${API_BASE_URL}/products/category/${category}`);
  return response.data;
};
