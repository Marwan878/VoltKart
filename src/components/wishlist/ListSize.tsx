import { useAppSelector } from "@store/hooks";
import { addSIfPlural } from "@utils/index";

export default function ListSize() {
  const { productIds } = useAppSelector((state) => state.wishlist);

  return (
    <p className="text-capitalize fs-5 mb-4">
      you have{" "}
      <span style={{ color: "var(--light-blue)" }}>
        {productIds.length} {addSIfPlural(productIds.length, "item")}
      </span>{" "}
      in wishlist:
    </p>
  );
}
