import ContentLoader from "react-content-loader";
import { Container, Row, Col } from "react-bootstrap";

const ProductSkeleton = () => {
  return (
    <Container>
      <Row className="align-items-start">
        {/* Left Column - Product Images */}
        <Col xs={12} md={6}>
          <ContentLoader
            speed={2}
            width="100%"
            height="auto"
            viewBox="0 0 400 480"
            backgroundColor="#f0f0f0"
            foregroundColor="#ffffff"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            {/* Main product image */}
            <rect x="0" y="0" rx="8" ry="8" width="400" height="400" />

            {/* Image indicators */}
            <circle cx="180" cy="430" r="6" />
            <circle cx="200" cy="430" r="6" />
            <circle cx="220" cy="430" r="6" />
          </ContentLoader>
        </Col>

        {/* Right Column - Product Details */}
        <Col md={6} xs={12}>
          <ContentLoader
            speed={2}
            width="100%"
            height="auto"
            viewBox="0 0 400 640"
            backgroundColor="#f0f0f0"
            foregroundColor="#ffffff"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            {/* Product title */}
            <rect x="0" y="0" rx="4" ry="4" width="280" height="24" />

            {/* Brand */}
            <rect x="0" y="40" rx="4" ry="4" width="100" height="16" />

            {/* Price */}
            <rect x="0" y="72" rx="4" ry="4" width="120" height="22" />

            {/* Description */}
            <rect x="0" y="112" rx="3" ry="3" width="380" height="10" />
            <rect x="0" y="128" rx="3" ry="3" width="360" height="10" />
            <rect x="0" y="144" rx="3" ry="3" width="340" height="10" />
            <rect x="0" y="160" rx="3" ry="3" width="240" height="10" />

            {/* Features */}
            <rect x="0" y="192" rx="3" ry="3" width="16" height="10" />
            <rect x="24" y="192" rx="3" ry="3" width="160" height="10" />

            <rect x="0" y="212" rx="3" ry="3" width="16" height="10" />
            <rect x="24" y="212" rx="3" ry="3" width="144" height="10" />

            <rect x="0" y="232" rx="3" ry="3" width="16" height="10" />
            <rect x="24" y="232" rx="3" ry="3" width="176" height="10" />

            <rect x="0" y="252" rx="3" ry="3" width="16" height="10" />
            <rect x="24" y="252" rx="3" ry="3" width="152" height="10" />

            {/* Storage label */}
            <rect x="0" y="288" rx="4" ry="4" width="96" height="12" />

            {/* Storage options */}
            <rect x="0" y="308" rx="6" ry="6" width="64" height="32" />
            <rect x="72" y="308" rx="6" ry="6" width="64" height="32" />
            <rect x="144" y="308" rx="6" ry="6" width="64" height="32" />

            {/* Quantity selector */}
            <rect x="0" y="360" rx="6" ry="6" width="32" height="32" />
            <rect x="40" y="368" rx="4" ry="4" width="24" height="16" />
            <rect x="72" y="360" rx="6" ry="6" width="32" height="32" />

            {/* Add to cart button */}
            <rect x="120" y="360" rx="16" ry="16" width="160" height="32" />

            {/* Wishlist button */}
            <rect x="296" y="360" rx="6" ry="6" width="32" height="32" />

            {/* Product Meta */}
            <rect x="0" y="416" rx="3" ry="3" width="48" height="10" />
            <rect x="56" y="416" rx="3" ry="3" width="96" height="10" />

            <rect x="0" y="436" rx="3" ry="3" width="64" height="10" />
            <rect x="72" y="436" rx="3" ry="3" width="160" height="10" />

            <rect x="0" y="456" rx="3" ry="3" width="40" height="10" />
            <rect x="48" y="452" rx="4" ry="4" width="48" height="16" />
            <rect x="104" y="452" rx="4" ry="4" width="56" height="16" />
            <rect x="168" y="452" rx="4" ry="4" width="40" height="16" />

            <rect x="0" y="480" rx="3" ry="3" width="40" height="10" />
            <rect x="48" y="476" rx="4" ry="4" width="24" height="16" />
            <rect x="80" y="476" rx="4" ry="4" width="24" height="16" />
            <rect x="112" y="476" rx="4" ry="4" width="24" height="16" />
            <rect x="144" y="476" rx="4" ry="4" width="24" height="16" />
            <rect x="176" y="476" rx="4" ry="4" width="24" height="16" />
            <rect x="208" y="476" rx="4" ry="4" width="24" height="16" />
          </ContentLoader>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSkeleton;
