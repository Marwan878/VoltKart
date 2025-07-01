import { Box, ChartColumnIncreasing, ShoppingBag } from "lucide-react";

const ADMIN_NAV_LINKS = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: ChartColumnIncreasing,
  },
  { label: "Orders", path: "/admin/orders", icon: ShoppingBag },
  { label: "Inventory", path: "/admin/inventory", icon: Box },
] as const;

const TIME_FILTERS = ["Day", "Week", "Month", "Year"] as const;

export { ADMIN_NAV_LINKS, TIME_FILTERS };
