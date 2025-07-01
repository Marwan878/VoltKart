import { Button } from "@components/ui";
import { Link } from "react-router-dom";

import { TProduct } from "@types";

type ViewDetailsButtonProps = {
  product: TProduct;
};

export default function ViewDetailsButton({
  product,
}: Readonly<ViewDetailsButtonProps>) {
  return (
    <Button<typeof Link>
      variant="blackToBlue"
      as={Link}
      to={`/product/${product.id}`}
      className="my-2"
      style={{ alignSelf: "center" }}
    >
      View Details
    </Button>
  );
}
