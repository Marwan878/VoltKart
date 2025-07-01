import Slider, { type Settings } from "react-slick";
import ZoomImage from "@components/Product/ProductImageCarousel/ZoomImage";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

export default function ImageCarousel({
  images,
  settings,
}: {
  readonly images: string[];
  readonly settings: Settings;
}) {
  return (
    <Slider
      {...{
        ...settings,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
      }}
    >
      {images.map((url) => (
        <ZoomImage key={url} src={url} alt="" />
      ))}
    </Slider>
  );
}
