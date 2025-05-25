import {
  Articles,
  Banner,
  BrandsAndPartners,
  CategoriesGrid,
  Features1,
  Features2,
  Hero,
  Newsletter,
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
      <Banner />
      <ProductsCarousel />
      <HighlightedProducts />
      {/* <WeeklyDeals /> */}
      <Features2 />
      <Articles />
      <BrandsAndPartners />
      <Newsletter />
      <ScrollToTop />
    </>
  );
};

export default Home;
