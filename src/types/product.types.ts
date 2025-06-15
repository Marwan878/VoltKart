import { CATEGORIES } from "@constants";

export type TProduct = {
  id: string;
  name: string;
  categories: (typeof CATEGORIES)[number][];
  images: {
    main: string;
    hover: string;
    gallery: string[];
  };
  releaseDate: number;
  maxOrderQuantity?: number;
  optionCombinations: TProductOptionCombination[];
  rating: number;
  description: string;
  brand: string;
  features: string[];
};

export type TProductOptionCombination = {
  color?: TColor;
  storage?: string;
  ram?: string;
  quantity?: number;
  price: TPrice;
  stock: number;
  sku: string;
};

export type TColor = {
  name: string;
  hex: string;
};

export type TPrice = {
  original: number;
  discounted: number;
  currency: string;
  discountPercent: number;
};
