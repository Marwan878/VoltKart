import { Button, SectionHeading } from "@components/ui";
import { DEALS_PRODUCTS } from "@constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";
import { Container, Stack } from "react-bootstrap";
import Slider, { type Settings } from "react-slick";
import ProductCard from "../products-carousel/ProductCard";

import styles from "../style.module.css";

export default function WeeklyDeals() {
  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: "",
    nextArrow: (
      <Arrow aria-label="Show next product.">
        <ChevronRight color="black" />
      </Arrow>
    ),
    prevArrow: (
      <Arrow aria-label="Show previous product.">
        <ChevronLeft color="black" />
      </Arrow>
    ),
    responsive: [
      {
        breakpoint: 7000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.deals}>
      <Container>
        <SectionHeading>Weekly Hot Deals</SectionHeading>
        <Stack className="align-items-center">
          <Slider {...sliderSettings} className="mw-100 px-5">
            {DEALS_PRODUCTS.map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </Slider>
          <Button variant="blackToWhite">View All Deals</Button>
        </Stack>
      </Container>
    </section>
  );
}

function Arrow(props: Readonly<ComponentPropsWithoutRef<"button">>) {
  const { className, style, onClick, children } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        borderRadius: "50%",
        border: "none",
        width: "2.5rem",
        height: "2.5rem",
      }}
    >
      {children}
    </button>
  );
}
