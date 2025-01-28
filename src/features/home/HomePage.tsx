import { useState } from "react";

import { CategorySelector } from "./components/CategorySelector";
import { ProductsList } from "./components/ProductsList";

export const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h1>Fake Store</h1>
      <CategorySelector
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductsList selectedCategory={selectedCategory} />
    </div>
  );
};
