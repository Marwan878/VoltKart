import AddNewProductForm from "@components/admin/inventory/AddNewProductForm";
import LowStockProducts from "@components/admin/inventory/LowStockProducts/LowStockProducts";
import { Container } from "react-bootstrap";

const Inventory = () => {
  return (
    <Container fluid>
      <h1>Inventory</h1>

      <LowStockProducts />

      <AddNewProductForm />
    </Container>
  );
};

export default Inventory;
