import { Col, Row } from "react-bootstrap";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductImageCarousel from "./ProductImageCarousel/ProductImageCarousel";

import { TProduct } from "@types";

export default function Product({ product }: { readonly product: TProduct }) {
  return (
    <Row className="justify-content-between gap-4">
      <Col lg={5} sm={12} className="mt-0 flex-grow-1">
        <ProductImageCarousel images={product.images.gallery} />
      </Col>
      <Col lg={6} sm={12} className="mt-0">
        <ProductDetails product={product} />
      </Col>
    </Row>
  );
}
