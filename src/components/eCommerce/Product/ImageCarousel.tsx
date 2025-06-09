import Slider, { type Settings } from "react-slick";
import ZoomImage from "./ZoomImage";
import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./styles.module.css";

const sliderSettings: Settings = {
  slidesToScroll: 1,
  className: "mw-100",
  // nextArrow: (
  //   <Arrow>
  //     <ChevronRight color="black" />
  //   </Arrow>
  // ),
  // prevArrow: (
  //   <Arrow>
  //     <ChevronLeft color="black" />
  //   </Arrow>
  // ),
};

export default function ImageCarousel({
  imagesUrls,
}: {
  readonly imagesUrls: string[];
}) {
  return (
    <Slider {...sliderSettings}>
      {imagesUrls.map((url) => (
        <ZoomImage key={url} src={url} alt="" />
      ))}
    </Slider>
  );
}
