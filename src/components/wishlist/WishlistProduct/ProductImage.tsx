import { useWishlistContext } from "./WishlistProduct";

export default function ProductImage() {
  const { product } = useWishlistContext();

  if (!product) return null;

  return (
    <img
      src={product.images.main}
      alt={product.name}
      className="img-fluid rounded"
      style={{ maxHeight: "80px", objectFit: "cover" }}
    />
  );
}
