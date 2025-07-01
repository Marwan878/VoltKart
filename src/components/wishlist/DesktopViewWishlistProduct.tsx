import { TProduct } from "@types";
import SelectOptionsButton from "./SelectOptionsButton";
import WishlistProduct from "../common/RowProduct/RowProduct";

type DesktopViewWishlistProductProps = {
  product: TProduct;
};

export default function DesktopViewWishlistProduct({
  product,
}: Readonly<DesktopViewWishlistProductProps>) {
  return (
    <tr className="border-bottom border-black border-1">
      <WishlistProduct product={product}>
        <td className="py-3">
          <WishlistProduct.RemoveFromWishlistButton />
        </td>
        <td>
          <WishlistProduct.ProductImage />
          <WishlistProduct.ProductName className="ms-5" />
        </td>
        <td>
          <WishlistProduct.ProductPrice />
        </td>
        <td>
          <WishlistProduct.StockStatus />
        </td>
        <td>
          <SelectOptionsButton productId={product.id} />
        </td>
      </WishlistProduct>
    </tr>
  );
}
