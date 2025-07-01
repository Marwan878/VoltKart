import ContentLoader from "react-content-loader";
import { Row, Col } from "react-bootstrap";

const ProductSkeleton = () => {
  const renderList = Array(4)
    .fill(0)
    .map((_, idx) => (
      <Col
        xs={12}
        md={6}
        lg={12}
        key={idx}
        className="d-flex justify-content-center mb-5 mt-2"
      >
        <ContentLoader
          speed={2}
          width={400}
          height={600}
          viewBox="0 0 400 600"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          {/* Image */}
          <rect x="0" y="0" rx="8" ry="8" width="400" height="220" />

          {/* Category */}
          <rect x="20" y="230" rx="4" ry="4" width="160" height="15" />

          {/* Title */}
          <rect x="20" y="255" rx="4" ry="4" width="220" height="20" />

          {/* Description */}
          <rect x="20" y="285" rx="3" ry="3" width="360" height="10" />
          <rect x="20" y="300" rx="3" ry="3" width="320" height="10" />

          {/* Color label */}
          <rect x="20" y="330" rx="4" ry="4" width="40" height="10" />

          {/* Color dots */}
          <circle cx="80" cy="335" r="10" />
          <circle cx="105" cy="335" r="10" />
          <circle cx="130" cy="335" r="10" />
          <circle cx="155" cy="335" r="10" />

          {/* RAM label */}
          <rect x="20" y="365" rx="4" ry="4" width="40" height="10" />
          <rect x="80" y="355" rx="6" ry="6" width="60" height="30" />
          <rect x="150" y="355" rx="6" ry="6" width="60" height="30" />

          {/* Storage label */}
          <rect x="20" y="405" rx="4" ry="4" width="60" height="10" />
          <rect x="100" y="395" rx="6" ry="6" width="80" height="30" />
          <rect x="190" y="395" rx="6" ry="6" width="80" height="30" />

          {/* Price */}
          <rect x="20" y="450" rx="4" ry="4" width="100" height="20" />
          <rect x="130" y="452" rx="4" ry="4" width="60" height="15" />

          {/* Add to cart button */}
          <rect x="20" y="490" rx="20" ry="20" width="140" height="40" />
        </ContentLoader>
      </Col>
    ));
  return <Row>{renderList}</Row>;
};

export default ProductSkeleton;
