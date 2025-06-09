import { Col, Row } from "react-bootstrap";
import Product from "../ProductCard/ProductCard";
import { TProduct } from "@types";

export default function ProductsGrid({
  products,
}: {
  readonly products: TProduct[];
}) {
  return (
    <Row>
      {products.map((product) => (
        <Col key={product.id} lg={12} md={6} sm={12}>
          <Product product={product} />
        </Col>
      ))}
    </Row>
  );
}
