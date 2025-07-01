import useScreenBreakpoint from "@hooks/useScreenBreakpoint";
import { TProduct } from "@types";
import { Col } from "react-bootstrap";
import NoProductsFound from "./NoProductsFound";
import ProductsGrid from "./ProductsGrid";
import SortingFilter from "./SortingFilter";

export default function MainContent({
  sortedAndFilteredProducts,
}: {
  readonly sortedAndFilteredProducts: TProduct[];
}) {
  const isSmallScreen = useScreenBreakpoint("lg");

  return (
    <Col lg={9} className="px-2">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="text-muted mb-0 text-center mx-auto mx-lg-0 mt-3">
          Showing all {sortedAndFilteredProducts.length} results
        </p>
        {!isSmallScreen && <SortingFilter />}
      </div>

      <ProductsGrid products={sortedAndFilteredProducts} />

      {sortedAndFilteredProducts.length === 0 && <NoProductsFound />}
    </Col>
  );
}
