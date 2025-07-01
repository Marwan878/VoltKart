import { useAppDispatch } from "@store/hooks";
import restockProduct from "@store/inventory/act/restockProduct";
import { useState } from "react";
import { Button } from "react-bootstrap";

type RestockFormProps = {
  itemId: string;
  itemSku: string;
};

export default function RestockForm({
  itemId,
  itemSku,
}: Readonly<RestockFormProps>) {
  const [restockAmount, setRestockAmount] = useState(1);
  const dispatch = useAppDispatch();

  const handleRestock = () => {
    dispatch(
      restockProduct({
        id: itemId,
        sku: itemSku,
        restockAmount,
      })
    )
      .unwrap()
      .then(() => {
        setRestockAmount(1);
      });
  };

  return (
    <div className="d-flex gap-3">
      <input
        type="number"
        min={1}
        max={1000}
        value={restockAmount}
        onChange={(e) => setRestockAmount(Number(e.target.value))}
      />
      <Button onClick={handleRestock}>Restock</Button>
    </div>
  );
}
