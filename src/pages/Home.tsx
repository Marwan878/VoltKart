import {
  BrandsAndPartners,
  CategoriesGrid,
  Features,
  Hero,
  ScrollToTop,
} from "@components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesGrid />
      <Features />
      <BrandsAndPartners />
      <ScrollToTop />
    </>
  );
};

export default Home;
