export type TProduct = {
  id: string;
  name: string;
  categories: string[];
  imageUrls: {
    main: string;
    hover: string;
    rest: string[];
  };
  releaseDate: number;
  max?: number;
  optionCombinations: TProductOptionCombination[];
  rating: number;
  description: string;
  brand: string;
  features: string[];
  quantity?: number;
  isLiked?: boolean;
  isAuthenticated?: boolean;
};

export type TProductOptionCombination = {
  color?: TColor;
  storage?: string;
  memory?: string;
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
