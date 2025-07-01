import AddNewProductForm from "@components/admin/inventory/AddNewProductForm";
import LowStockProducts from "@components/admin/inventory/LowStockProducts/LowStockProducts";

const Inventory = () => {
  return (
    <div>
      <h1 className="mb-4">Inventory</h1>
      <LowStockProducts />
      <AddNewProductForm />
    </div>
  );
};

export default Inventory;
