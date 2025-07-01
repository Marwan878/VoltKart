import { CSSProperties } from "react";
import { useRowProductContext } from "./RowProduct";

type ProductImageProps = {
  className?: string;
  style?: CSSProperties;
};

export default function ProductImage({ className, style }: ProductImageProps) {
  const { product } = useRowProductContext();

  if (!product) return null;

  return (
    <img
      src={product.images.main}
      alt={product.name}
      className={`img-fluid rounded ${className}`}
      style={{ maxHeight: "80px", objectFit: "cover", ...style }}
    />
  );
}
