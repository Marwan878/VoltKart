import ContentLoader from "react-content-loader";
import { Row, Col, Container, Stack } from "react-bootstrap";
import useScreenBreakpoint from "@hooks/useScreenBreakpoint";

const ProductsSkeleton = () => {
  const isSmallScreen = useScreenBreakpoint("lg");

  // Sidebar filters skeleton for desktop
  const SidebarFiltersSkeleton = () => (
    <Col lg={3} className="mb-4">
      <ContentLoader
        speed={2}
        width={250}
        height={800}
        viewBox="0 0 250 800"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        {/* Search bar */}
        <rect x="0" y="0" rx="6" ry="6" width="250" height="40" />

        {/* Categories section */}
        <rect x="0" y="60" rx="4" ry="4" width="80" height="16" />
        <rect x="0" y="85" rx="3" ry="3" width="120" height="12" />
        <rect x="0" y="105" rx="3" ry="3" width="100" height="12" />
        <rect x="0" y="125" rx="3" ry="3" width="140" height="12" />
        <rect x="0" y="145" rx="3" ry="3" width="110" height="12" />

        {/* Price range section */}
        <rect x="0" y="185" rx="4" ry="4" width="90" height="16" />
        <rect x="0" y="210" rx="6" ry="6" width="250" height="6" />
        <rect x="0" y="230" rx="3" ry="3" width="50" height="12" />
        <rect x="200" y="230" rx="3" ry="3" width="50" height="12" />

        {/* Colors section */}
        <rect x="0" y="270" rx="4" ry="4" width="60" height="16" />
        <circle cx="15" cy="305" r="12" />
        <circle cx="45" cy="305" r="12" />
        <circle cx="75" cy="305" r="12" />
        <circle cx="105" cy="305" r="12" />
        <circle cx="135" cy="305" r="12" />

        {/* Memory section */}
        <rect x="0" y="340" rx="4" ry="4" width="70" height="16" />
        <rect x="0" y="365" rx="6" ry="6" width="60" height="30" />
        <rect x="70" y="365" rx="6" ry="6" width="60" height="30" />
        <rect x="140" y="365" rx="6" ry="6" width="60" height="30" />

        {/* Storage section */}
        <rect x="0" y="415" rx="4" ry="4" width="70" height="16" />
        <rect x="0" y="440" rx="6" ry="6" width="80" height="30" />
        <rect x="90" y="440" rx="6" ry="6" width="80" height="30" />

        {/* Brands section */}
        <rect x="0" y="490" rx="4" ry="4" width="60" height="16" />
        <rect x="0" y="515" rx="3" ry="3" width="100" height="12" />
        <rect x="0" y="535" rx="3" ry="3" width="120" height="12" />
        <rect x="0" y="555" rx="3" ry="3" width="90" height="12" />
        <rect x="0" y="575" rx="3" ry="3" width="110" height="12" />
      </ContentLoader>
    </Col>
  );

  // Mobile filters skeleton
  const MobileFiltersSkeleton = () => (
    <Stack
      direction="horizontal"
      className="align-items-center justify-content-between gap-3 mb-4"
    >
      <ContentLoader
        speed={2}
        width={120}
        height={35}
        viewBox="0 0 120 35"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="18" ry="18" width="120" height="35" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={160}
        height={35}
        viewBox="0 0 160 35"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="6" ry="6" width="160" height="35" />
      </ContentLoader>
    </Stack>
  );

  // Main content skeleton
  const MainContentSkeleton = () => (
    <Col lg={9} className="px-2">
      {/* Header with results count and sorting */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <ContentLoader
          speed={2}
          width={200}
          height={20}
          viewBox="0 0 200 20"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="3" ry="3" width="200" height="20" />
        </ContentLoader>
        {!isSmallScreen && (
          <ContentLoader
            speed={2}
            width={160}
            height={35}
            viewBox="0 0 160 35"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="6" ry="6" width="160" height="35" />
          </ContentLoader>
        )}
      </div>

      {/* Products grid skeleton */}
      <Row>
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <Col key={idx} lg={12} md={6} sm={12} className="mb-4">
              <ContentLoader
                speed={2}
                width="100%"
                height={200}
                viewBox="0 0 400 200"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                {/* Product image */}
                <rect x="0" y="0" rx="8" ry="8" width="120" height="120" />

                {/* Product details */}
                <rect x="140" y="10" rx="4" ry="4" width="100" height="12" />
                <rect x="140" y="30" rx="4" ry="4" width="200" height="16" />
                <rect x="140" y="55" rx="3" ry="3" width="250" height="10" />
                <rect x="140" y="70" rx="3" ry="3" width="180" height="10" />

                {/* Color options */}
                <circle cx="155" cy="100" r="8" />
                <circle cx="175" cy="100" r="8" />
                <circle cx="195" cy="100" r="8" />

                {/* Price */}
                <rect x="140" y="125" rx="4" ry="4" width="80" height="18" />
                <rect x="230" y="127" rx="3" ry="3" width="50" height="14" />

                {/* Add to cart button */}
                <rect x="140" y="155" rx="20" ry="20" width="120" height="35" />
              </ContentLoader>
            </Col>
          ))}
      </Row>
    </Col>
  );

  return (
    <Container className="py-4 min-vh-100">
      <Row className="g-5">
        {isSmallScreen ? (
          <>
            <MobileFiltersSkeleton />
            <MainContentSkeleton />
          </>
        ) : (
          <>
            <SidebarFiltersSkeleton />
            <MainContentSkeleton />
          </>
        )}
      </Row>
    </Container>
  );
};

export default ProductsSkeleton;
