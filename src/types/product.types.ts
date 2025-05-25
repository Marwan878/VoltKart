export type TProduct = {
  id: number;
  name: string;
  price: {
    original: number;
    discounted: number;
    currency: string;
    discountPercent: number;
  };
  categories: string[];
  imageUrls: {
    main: string;
    hover: string;
  };
  url: string;
  releaseDate: number;
  cat_prefix?: string;
  img: string;
  quantity?: number;
  max: number;
  isLiked?: boolean;
  isAuthenticated?: boolean;
};
