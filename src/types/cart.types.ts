import { TProduct } from "./product.types";

export type TCartItem = {
  sku: string;
  quantity: number;
  product: TProduct;
  user_id: string;
};

type TCartItemWithProductId = TCartItem & {
  product_id: string;
};

export type TCartItemForState = Omit<TCartItemWithProductId, "user_id">;
