import { useAppSelector } from "@store/hooks";
import { Table } from "react-bootstrap";
import DesktopViewWishlistProduct from "./DesktopViewWishlistProduct";

export default function DesktopViewWishlist() {
  const products = useAppSelector((state) => state.wishlist.records);

  return (
    <Table responsive className="align-middle">
      <thead className="text-white">
        <tr className="">
          <th className="py-3 bg-black text-white"></th>
          <th className="bg-black text-white">Product</th>
          <th className="bg-black text-white">Price</th>
          <th className="bg-black text-white">Stock Status</th>
          <th className="bg-black text-white"></th>
        </tr>
      </thead>
      <tbody className="border border-black border-1">
        {products.map((product) => (
          <DesktopViewWishlistProduct key={product.id} product={product} />
        ))}
      </tbody>
    </Table>
  );
}
