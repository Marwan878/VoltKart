import {
  BrandsAndPartners,
  CategoriesGrid,
  Features1,
  Features2,
  Hero,
  ProductsCarousel,
  WeeklyDeals,
  HighlightedProducts,
  ScrollToTop,
} from "@components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesGrid />
      <Features1 />
      <ProductsCarousel />
      <HighlightedProducts />
      <WeeklyDeals />
      <Features2 />
      <BrandsAndPartners />
      <ScrollToTop />
    </>
  );
};

export default Home;
