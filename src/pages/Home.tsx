import {
  BrandsAndPartners,
  CategoriesGrid,
  Features1,
  Features2,
  Hero,
  ScrollToTop,
} from "@components/home";
import Seed from "@components/Seed";

const Home = () => {
  return (
    <>
      {/* <Seed /> */}
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
