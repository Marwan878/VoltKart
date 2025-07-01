export type TProduct = {
  id: string;
  name: string;
  categoryId: string;
  images: {
    main: string;
    hover: string;
    gallery: string[];
  };
  releaseDate: number;
  maxOrderQuantity?: number;
  optionCombinations: TProductOptionCombination[];
  description: string;
  brand: string;
  features: string[];
};

export type TProductOptionCombination = {
  color?: TColor;
  storage?: string;
  ram?: string;
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

export type TLowStockProduct = {
  id: string;
  sku: string;
  stock: number;
};
