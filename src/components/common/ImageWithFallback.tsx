import { ComponentProps, useState } from "react";

type ImageWithFallbackProps = {
  src?: string;
  fallback: string;
} & ComponentProps<"img">;

export default function ImageWithFallback({
  src,
  fallback,
  ...rest
}: Readonly<ImageWithFallbackProps>) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc ?? fallback}
      alt={imgSrc ? rest.alt : "Product image unavailable"}
      onError={() => setImgSrc(fallback)}
      {...rest}
      className={`${imgSrc === fallback ? "opacity-50" : ""} ${rest.className}`}
    />
  );
}
