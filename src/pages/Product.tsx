import Product from "@components/Product/Product";
import { Loading } from "@components/feedback";
import { useProduct } from "@hooks/useProduct";
import { Container } from "react-bootstrap";

export default function ProductPage() {
  const { product, status, error } = useProduct();

  return (
    <Container className="min-vh-100 mb-5">
      <Loading status={status} error={error} type="product">
        {product && <Product product={product} />}
      </Loading>
    </Container>
  );
}
