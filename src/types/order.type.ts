export type TOrder = {
  id: string;
  user_id: string;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  total: number;
  created_at: string;
};
