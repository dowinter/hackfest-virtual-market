import {ProductCategory} from "./ProductEvent";

export interface Product {
  name: string,
  id: string,
  stockPercent: number,
  category: ProductCategory
}
