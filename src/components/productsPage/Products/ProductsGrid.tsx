import { Col, Row } from "react-bootstrap";
import Product from "../ProductCard/ProductCard";

import { TProduct } from "@types";

export default function ProductsGrid({
  products,
}: {
  readonly products: TProduct[];
}) {
  return (
    <Row className="gap-4">
      {products.map((product) => (
        <Col key={product.id} lg={12} md={6} xs={12}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
}
