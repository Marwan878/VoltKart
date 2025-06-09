import { ImageCarousel, ProductDetails } from "@components/eCommerce/Product";
import { Loading } from "@components/feedback";
import { useProduct } from "@hooks/useProduct";
import { Container, Row, Col } from "react-bootstrap";

export default function Product() {
  const { product, status, error, quantity, isWishlisted } = useProduct();

  return (
    <Container className="mh-100vh mb-5">
      <Loading status={status} error={error} type="product">
        {product && (
          <Row>
            <Col lg={6} sm={12} className="mt-0">
              {/* <ImageCarousel imagesUrls={product.imageUrls.rest} /> */}
              <div className="border border-1 border-red h-100" />
            </Col>
            <Col lg={6} sm={12} className="mt-0">
              <ProductDetails
                product={product}
                quantity={quantity}
                isWishlisted={isWishlisted}
              />
            </Col>
          </Row>
        )}
      </Loading>
    </Container>
  );
}
