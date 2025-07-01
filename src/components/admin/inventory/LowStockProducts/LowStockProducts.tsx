import { useAppDispatch, useAppSelector } from "@store/hooks";
import RestockForm from "./RestockForm";
import { useEffect } from "react";
import getLowStockProducts from "@store/inventory/act/getLowStockProducts";

export default function LowStockProducts() {
  const lowStockProducts = useAppSelector(
    (state) => state.inventory.lowStockProducts
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getLowStockProducts());
  }, [dispatch]);

  return (
    <>
      <h2>Low/Out of Stock Products</h2>
      <table
        style={{
          width: "100%",
          background: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          marginTop: 24,
        }}
      >
        <thead style={{ background: "#f3f4f6" }}>
          <tr>
            <th style={{ padding: 12 }}>Product ID</th>
            <th style={{ padding: 12 }}>SKU</th>
            <th style={{ padding: 12 }}>Stock</th>
            <th style={{ padding: 12 }}>Restock</th>
          </tr>
        </thead>
        <tbody>
          {lowStockProducts.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: 12 }}>{item.id}</td>
              <td style={{ padding: 12 }}>{item.sku}</td>
              <td style={{ padding: 12 }}>{item.stock}</td>
              <td style={{ padding: 12 }}>
                <RestockForm itemId={item.id} itemSku={item.sku} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
