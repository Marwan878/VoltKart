import { ORDER_STATUSES } from "@constants";

export type TOrderItem = {
  id: string;
  user_id: string;
  status: TOrderStatus;
  total: number;
  currency: string;
  created_at: string;
};

export type TOrderStatus = (typeof ORDER_STATUSES)[number];
