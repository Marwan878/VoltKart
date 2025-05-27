// import { LANDING_PAGE_PRODUCTS } from "@constants/index";
import { chunkArray } from "@utils";
import type { TProduct } from "@types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Carousel, Col, Row, Tab, Tabs } from "react-bootstrap";
import ProductCard from "./ProductCard";

import styles from "../style.module.css";

const PRODUCTS_PER_CAROUSEL_ITEM = 8;

// type TLandingPageProductsCategory = keyof typeof LANDING_PAGE_PRODUCTS;

export default function ProductsCarousel() {
  return <></>;
  // const [key, setKey] = useState<TLandingPageProductsCategory>("On Sale");
  // const [index, setIndex] = useState(0);
  // const canDisplayPrevious = index > 0;
  // const canDisplayNext =
  //   (index + 1) * PRODUCTS_PER_CAROUSEL_ITEM <
  //   LANDING_PAGE_PRODUCTS[key].length;
  // const handlePrevious = () => {
  //   if (!canDisplayPrevious) {
  //     return;
  //   }
  //   setIndex((curr) => curr - 1);
  // };
  // const handleNext = () => {
  //   if (!canDisplayNext) {
  //     return;
  //   }
  //   setIndex((curr) => curr + 1);
  // };
  // return (
  //   <div className="d-flex container flex-column">
  //     <div
  //       className="border-bottom border-black position-relative d-md-flex flex-md-row-reverse justify-content-md-between"
  //       style={{ marginBlockEnd: "4rem" }}
  //     >
  //       <div className="d-flex gap-3">
  //         <button
  //           aria-label="Show previous."
  //           disabled={!canDisplayPrevious}
  //           onClick={handlePrevious}
  //         >
  //           <ChevronLeft aria-hidden />
  //         </button>
  //         <button
  //           aria-label="Show next."
  //           disabled={!canDisplayNext}
  //           onClick={handleNext}
  //         >
  //           <ChevronRight aria-hidden />
  //         </button>
  //       </div>
  //       <Tabs
  //         id="productsCarouselTabs"
  //         activeKey={key}
  //         variant="underline"
  //         onSelect={(k) => {
  //           setIndex(0);
  //           setKey(k as TLandingPageProductsCategory);
  //         }}
  //         className={styles.tabs}
  //       >
  //         {Object.keys(LANDING_PAGE_PRODUCTS).map((category) => (
  //           <Tab
  //             eventKey={category}
  //             title={category}
  //             className={styles.tab}
  //             key={category}
  //             style={{ color: "black" }}
  //           />
  //         ))}
  //       </Tabs>
  //     </div>
  //     <Carousel
  //       activeIndex={index}
  //       slide={false}
  //       indicators={false}
  //       interval={null}
  //       controls={false}
  //       className={styles.productsCarousel}
  //     >
  //       {chunkArray<TProduct>(
  //         Object.values(LANDING_PAGE_PRODUCTS[key]),
  //         PRODUCTS_PER_CAROUSEL_ITEM
  //       ).map((products, i) => (
  //         <Carousel.Item key={i}>
  //           <Row>
  //             {products.map((product) => (
  //               <Col xs={6} md={4} lg={3} key={product.url}>
  //                 <ProductCard product={product} />
  //               </Col>
  //             ))}
  //           </Row>
  //         </Carousel.Item>
  //       ))}
  //     </Carousel>
  //   </div>
  // );
}
