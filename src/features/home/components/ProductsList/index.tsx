import { useEffect, useState } from "react";
import {
  fetchProducts,
  fetchProductsByCategory,
} from "../../services/product-service";
import { Product } from "../../types";
import { ALL_PRODUCTS_CATEGORY } from "../CategorySelector";
import { ProductsListProps } from "./types";
import { ProductCard } from "../ProductCard";

const CENTERED_CONTAINER_STYLES = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
};

export const ProductsList = ({ selectedCategory }: ProductsListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const allProducts =
    selectedCategory === "" || selectedCategory === ALL_PRODUCTS_CATEGORY;

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = allProducts
          ? await fetchProducts()
          : await fetchProductsByCategory(selectedCategory);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [selectedCategory]);

  if (isLoading) {
    return (
      <div style={{ ...CENTERED_CONTAINER_STYLES }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ ...CENTERED_CONTAINER_STYLES }}>
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div style={{ ...CENTERED_CONTAINER_STYLES }}>
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
