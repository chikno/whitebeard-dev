import { create } from "zustand";
import { AddtoCartStatus, Product } from "./types/product";
export const useAddtoCart = create<AddtoCartStatus>((set) => ({
  count: 0,
  products: [],
  addToCart: (product: Product) =>
    set((state) => ({
      count: state.count + 1,
      products: [...state.products, product],
    })),
  removeFromCart: (id: number) =>
    set((state) => ({
      count: state.count - 1,
      products: state.products.filter((_product) => _product.id !== id),
    })),
}));
