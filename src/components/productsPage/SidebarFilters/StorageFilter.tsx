import StorageOptions from "@components/common/Options/StorageOptions/StorageOptions";

import { TProduct } from "@types";
import { useSearchParams } from "react-router-dom";

type StorageFilterProps = {
  products: TProduct[];
};

export default function StorageFilter({
  products,
}: Readonly<StorageFilterProps>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const storageOptions = Array.from(
    new Set(
      products.flatMap((p) =>
        p.optionCombinations.map((option) => option.storage)
      )
    )
  ).filter(Boolean) as string[];

  if (storageOptions.length === 0) return null;

  return (
    <StorageOptions
      className={"mb-3"}
      optionsContainerClassName="d-flex gap-2"
      options={storageOptions}
      heading={"Storage"}
      onChange={(storage) => {
        const newSearchParams = new URLSearchParams(searchParams);
        const selectedStorages = searchParams.get("storage")?.split(",") ?? [];

        if (selectedStorages.includes(storage)) {
          const newStorages = selectedStorages.filter((s) => s !== storage);
          if (newStorages.length === 0) {
            newSearchParams.delete("storage");
          } else {
            newSearchParams.set("storage", newStorages.join(","));
          }
        } else {
          newSearchParams.set(
            "storage",
            [...selectedStorages, storage].join(",")
          );
        }

        setSearchParams(newSearchParams);
      }}
    />
  );
}
