import { Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { ListSize, ProductsTable } from "@components/wishlist";
import useWishlist from "@hooks/useWishlist";
import { Container } from "react-bootstrap";

const Wishlist = () => {
  const { loading, error, records } = useWishlist();

  return (
    <Container className="mb-3 min-vh-100">
      <Heading title="My Wishlist" />
      <Loading
        status={loading}
        error={error}
        type="ordersTable"
        empty={records.length === 0}
        message="No products in wishlist"
      >
        <ListSize />
        <ProductsTable />
      </Loading>
    </Container>
  );
};

export default Wishlist;
