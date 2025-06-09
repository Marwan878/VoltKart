import ContentLoader from "react-content-loader";
import { Container, Row, Col } from "react-bootstrap";

const ProductSkeleton = () => {
  return (
    <Container>
      <Row className="g-5">
        {/* Left Column - Product Images */}
        <Col lg={6} md={12}>
          <ContentLoader
            speed={2}
            width={500}
            height={600}
            viewBox="0 0 500 600"
            backgroundColor="#f0f0f0"
            foregroundColor="#ffffff"
          >
            {/* Main product image */}
            <rect x="0" y="0" rx="8" ry="8" width="500" height="500" />

            {/* Image indicators */}
            <circle cx="230" cy="530" r="8" />
            <circle cx="250" cy="530" r="8" />
            <circle cx="270" cy="530" r="8" />
          </ContentLoader>
        </Col>

        {/* Right Column - Product Details */}
        <Col lg={6} md={12}>
          <ContentLoader
            speed={2}
            width={500}
            height={800}
            viewBox="0 0 500 800"
            backgroundColor="#f0f0f0"
            foregroundColor="#ffffff"
          >
            {/* Product title */}
            <rect x="0" y="0" rx="4" ry="4" width="300" height="30" />

            {/* Brand */}
            <rect x="0" y="50" rx="4" ry="4" width="120" height="18" />

            {/* Price */}
            <rect x="0" y="90" rx="4" ry="4" width="150" height="28" />

            {/* Description */}
            <rect x="0" y="140" rx="3" ry="3" width="480" height="12" />
            <rect x="0" y="160" rx="3" ry="3" width="450" height="12" />
            <rect x="0" y="180" rx="3" ry="3" width="420" height="12" />
            <rect x="0" y="200" rx="3" ry="3" width="300" height="12" />

            {/* Features */}
            <rect x="0" y="240" rx="3" ry="3" width="20" height="12" />
            <rect x="30" y="240" rx="3" ry="3" width="200" height="12" />

            <rect x="0" y="265" rx="3" ry="3" width="20" height="12" />
            <rect x="30" y="265" rx="3" ry="3" width="180" height="12" />

            <rect x="0" y="290" rx="3" ry="3" width="20" height="12" />
            <rect x="30" y="290" rx="3" ry="3" width="220" height="12" />

            <rect x="0" y="315" rx="3" ry="3" width="20" height="12" />
            <rect x="30" y="315" rx="3" ry="3" width="190" height="12" />

            {/* Storage label */}
            <rect x="0" y="360" rx="4" ry="4" width="120" height="15" />

            {/* Storage options */}
            <rect x="0" y="385" rx="6" ry="6" width="80" height="40" />
            <rect x="90" y="385" rx="6" ry="6" width="80" height="40" />
            <rect x="180" y="385" rx="6" ry="6" width="80" height="40" />

            {/* Quantity selector */}
            <rect x="0" y="450" rx="6" ry="6" width="40" height="40" />
            <rect x="50" y="460" rx="4" ry="4" width="30" height="20" />
            <rect x="90" y="450" rx="6" ry="6" width="40" height="40" />

            {/* Add to cart button */}
            <rect x="150" y="450" rx="20" ry="20" width="200" height="40" />

            {/* Wishlist button */}
            <rect x="370" y="450" rx="6" ry="6" width="40" height="40" />

            {/* Product Meta */}
            <rect x="0" y="520" rx="3" ry="3" width="60" height="12" />
            <rect x="70" y="520" rx="3" ry="3" width="120" height="12" />

            <rect x="0" y="545" rx="3" ry="3" width="80" height="12" />
            <rect x="90" y="545" rx="3" ry="3" width="200" height="12" />

            <rect x="0" y="570" rx="3" ry="3" width="50" height="12" />
            <rect x="60" y="565" rx="4" ry="4" width="60" height="20" />
            <rect x="130" y="565" rx="4" ry="4" width="70" height="20" />
            <rect x="210" y="565" rx="4" ry="4" width="50" height="20" />

            <rect x="0" y="600" rx="3" ry="3" width="50" height="12" />
            <rect x="60" y="595" rx="4" ry="4" width="30" height="20" />
            <rect x="100" y="595" rx="4" ry="4" width="30" height="20" />
            <rect x="140" y="595" rx="4" ry="4" width="30" height="20" />
            <rect x="180" y="595" rx="4" ry="4" width="30" height="20" />
            <rect x="220" y="595" rx="4" ry="4" width="30" height="20" />
            <rect x="260" y="595" rx="4" ry="4" width="30" height="20" />
          </ContentLoader>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSkeleton;
