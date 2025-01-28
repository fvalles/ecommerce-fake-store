import { fetchData } from "../../../shared/utils/fetch-data";
import { Product } from "../types";

const API_BASE_URL = "https://fakestoreapi.com/products";

const ENDPOINTS = {
  PRODUCTS: "",
  CATEGORIES: "/categories",
  CATEGORY: "/category/",
};

// Fetch all products
export const fetchProducts = (): Promise<Product[]> =>
  fetchData<Product[]>(`${API_BASE_URL}${ENDPOINTS.PRODUCTS}`);

// Fetch product categories
export const fetchProductsCategories = (): Promise<string[]> =>
  fetchData<string[]>(`${API_BASE_URL}${ENDPOINTS.CATEGORIES}`);

// Fetch products by category
export const fetchProductsByCategory = (category: string): Promise<Product[]> =>
  fetchData<Product[]>(`${API_BASE_URL}${ENDPOINTS.CATEGORY}${category}`);
