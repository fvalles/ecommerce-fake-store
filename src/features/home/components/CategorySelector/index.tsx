import { useEffect, useState } from "react";
import { fetchProductsCategories } from "../../services/product-service";
import { CategorySelectorProps } from "./types";

export const ALL_PRODUCTS_CATEGORY = "All";

export const CategorySelector = ({
  selectedCategory,
  setSelectedCategory,
}: CategorySelectorProps) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchProductsCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    loadCategories();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value={ALL_PRODUCTS_CATEGORY}>All Products</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
