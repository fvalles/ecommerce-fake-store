import { CategorySelectorProps } from "../CategorySelector/types";

export interface ProductsListProps
  extends Pick<CategorySelectorProps, "selectedCategory"> {}
