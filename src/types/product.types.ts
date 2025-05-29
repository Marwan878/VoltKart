export type TProduct = {
  id: string;
  name: string;
  categories: string[];
  imageUrls: {
    main: string;
    hover: string;
  };
  releaseDate: number;
  max?: number;
  optionCombinations: [
    {
      color: TColor;
      storage: string;
      memory: string;
      price: {
        original: number;
        discounted: number;
        currency: string;
        discountPercent: number;
      };
      stock: number;
    }
  ];
  rating: number;
  description: string;
  brand: string;
  quantity?: number;
  isLiked?: boolean;
  isAuthenticated?: boolean;
};

export type TColor = {
  name: string;
  hex: string;
};
