import { useAppSelector } from "@store/hooks";
import { Col, Row } from "react-bootstrap";
import MobileViewWishlistProduct from "./MobileViewWishlistProduct";

export default function MobileViewWishlist() {
  const products = useAppSelector((state) => state.wishlist.records);

  return (
    <Row className="g-3">
      {products.map((product) => (
        <Col xs={12} key={product.id}>
          <MobileViewWishlistProduct product={product} />
        </Col>
      ))}
    </Row>
  );
}
