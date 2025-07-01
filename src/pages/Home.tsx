import {
  BrandsAndPartners,
  CategoriesGrid,
  Features1,
  Features2,
  Hero,
  ScrollToTop,
} from "@components/home";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoriesGrid />
      <Features1 />
      <Features2 />
      <BrandsAndPartners />
      <ScrollToTop />
    </>
  );
};

export default Home;
