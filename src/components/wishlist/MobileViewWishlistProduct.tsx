import { TProduct } from "@types";
import SelectOptionsButton from "./SelectOptionsButton";
import WishlistProduct from "../common/RowProduct/RowProduct";

type MobileViewWishlistProductProps = {
  product: TProduct;
};

export default function MobileViewWishlistProduct({
  product,
}: Readonly<MobileViewWishlistProductProps>) {
  return (
    <div className="h-100">
      <WishlistProduct product={product}>
        <div className="py-1 d-flex align-items-center justify-content-between border border-black border-1 px-1">
          <WishlistProduct.ProductImage />
          <WishlistProduct.ProductName className="ms-3" />
          <WishlistProduct.RemoveFromWishlistButton className="ms-auto" />
        </div>

        <table className="w-100">
          <thead className="bg-black text-white border-1 border-bottom-0 border-top-0 border-black">
            <tr className="text-uppercase">
              <th className="ps-3 py-3 fw-light">price</th>
              <th className="fw-light">status</th>
            </tr>
          </thead>
          <tbody className="text-dark border border-secondary-subtle border-1 border-top-0">
            <tr>
              <td className="py-3 ps-3 fs-4 fw-semibold">
                <WishlistProduct.ProductPrice />
              </td>
              <td>
                <WishlistProduct.StockStatus />
              </td>
            </tr>
            <SelectOptionsButton productId={product.id} className="my-3 ms-3" />
          </tbody>
        </table>
      </WishlistProduct>
    </div>
  );
}
