import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton/ProductCardSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import LottieHandler from "../LottieHandler/LottieHandler";
import TableSkeleton from "../skeletons/TableSkeleton/TableSkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";

import { TLoading } from "@types";

const skeletonsTypes = {
  category: CategorySkeleton,
  productCard: ProductCardSkeleton,
  cart: CartSkeleton,
  table: TableSkeleton,
  product: ProductSkeleton,
};

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
  empty?: boolean;
  message?: string;
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
  empty,
  message,
}: LoadingProps) => {
  const Component = skeletonsTypes[type];

  if (status === "pending") {
    return <Component />;
  }
  if (status === "failed") {
    return (
      <div>
        <LottieHandler type="error" message={error as string} />
      </div>
    );
  }
  if (empty) {
    return <LottieHandler type="empty" message={message} />;
  }

  return <div>{children}</div>;
};

export default Loading;
