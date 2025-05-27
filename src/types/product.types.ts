export type TProduct = {
  id: number;
  name: string;
  categories: string[];
  imageUrls: {
    main: string;
    hover: string;
  };
  url: string;
  releaseDate: number;
  img: string;
  max: number;
  optionCombinations: [
    {
      color: string;
      storage: number;
      memory: number;
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
  brand?: string;
  quantity?: number;
  isLiked?: boolean;
  isAuthenticated?: boolean;
};
