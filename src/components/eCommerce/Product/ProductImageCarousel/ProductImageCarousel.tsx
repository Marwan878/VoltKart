import ImageCarousel from "@components/common/ImageCarousel/ImageCarousel";
import { Settings } from "react-slick";

import styles from "./style.module.css";

const sliderSettings: Settings = {
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  infinite: false,
  className: styles.slider,
};

export default function ProductImageCarousel({
  images,
}: {
  readonly images: string[];
}) {
  return <ImageCarousel images={images} settings={sliderSettings} />;
}
