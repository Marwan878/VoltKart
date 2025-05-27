import { TProduct } from "@types";
import { Col } from "react-bootstrap";
import { SetURLSearchParams } from "react-router-dom";
import SortingFilter from "./SortingFilter";

export default function MainContent({
  sortedProducts,
  searchParams,
  setSearchParams,
  sortBy,
}: {
  sortedProducts: TProduct[];
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  sortBy: string;
}) {
  return (
    <Col lg={9}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="text-muted mb-0">
          Showing all {sortedProducts.length} results
        </p>
        <SortingFilter
          sortBy={sortBy}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>

      {/* Products Grid */}

      {/* No products found */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-5">
          <h5 className="text-muted">No products found</h5>
          <p className="text-muted">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </Col>
  );
}
