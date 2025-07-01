import { Loading } from "@components/feedback";
import {
  MainContent,
  OffcanvasFilters,
  SidebarFilters,
  SortingFilter,
} from "@components/productsPage";
import useProducts from "@hooks/useProducts";
import useScreenBreakpoint from "@hooks/useScreenBreakpoint";
import { Container, Row, Stack } from "react-bootstrap";

export default function Products() {
  const isSmallScreen = useScreenBreakpoint("lg");

  const { loading, error, products, sortedAndFilteredProducts } = useProducts();

  return (
    <Container className="py-4 min-vh-100">
      <Loading error={error} status={loading} type="products">
        <Row>
          {isSmallScreen ? (
            <Stack
              direction="horizontal"
              className="align-items-center justify-content-between gap-3"
            >
              <OffcanvasFilters products={products} />
              <SortingFilter />
            </Stack>
          ) : (
            <SidebarFilters products={products} />
          )}
          <MainContent sortedAndFilteredProducts={sortedAndFilteredProducts} />
        </Row>
      </Loading>
    </Container>
  );
}
