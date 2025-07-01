import ColorOptions from "@components/common/Options/ColorOptions/ColorOptions";
import MemoryOptions from "@components/common/Options/MemoryOptions/MemoryOptions";
import StorageOptions from "@components/common/Options/StorageOptions/StorageOptions";
import { useSearchParams } from "react-router-dom";

import { TColor, TProduct } from "@types";

export default function ProductOptions({
  product,
}: {
  readonly product: TProduct;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const storageOptionIsAvailable = (option: string) => {
    const selectedColorName = searchParams.get("colors") ?? "";
    return (
      (product.optionCombinations.find(
        (combination) =>
          combination.storage === option &&
          combination.color?.name === selectedColorName
      )?.stock ?? 0) > 0
    );
  };

  const memoryOptionIsAvailable = (option: string) => {
    const selectedColorName = searchParams.get("colors") ?? "";
    const selectedStorage = searchParams.get("storage") ?? "";
    return (
      (product.optionCombinations.find(
        (combination) =>
          combination.ram === option &&
          combination.storage === selectedStorage &&
          combination.color?.name === selectedColorName
      )?.stock ?? 0) > 0
    );
  };

  return (
    <div>
      <ColorOptions
        options={
          product.optionCombinations
            .map((combination) => combination.color)
            .filter(Boolean) as TColor[]
        }
        showQuantity={false}
        showColorName={false}
        optionsContainerClassName="d-flex gap-2 mb-2"
        heading={"Colors:"}
        onChange={(color: TColor) => {
          setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("colors", color.name);
            return newParams;
          });
        }}
      />
      <StorageOptions
        options={
          product.optionCombinations
            .map((combination) => combination.storage)
            .filter(Boolean) as string[]
        }
        optionsContainerClassName="d-flex gap-2 mb-2"
        heading={"Storage:"}
        onChange={(storage: string) => {
          setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("storage", storage);
            return newParams;
          });
        }}
        computeOptionClassName={(storage: string) =>
          storageOptionIsAvailable(storage)
            ? ""
            : "text-decoration-line-through text-muted"
        }
      />
      <MemoryOptions
        options={
          product.optionCombinations
            .map((combination) => combination.ram)
            .filter(Boolean) as string[]
        }
        optionsContainerClassName="d-flex gap-2 mb-4"
        heading={"Memory:"}
        onChange={(memory: string) => {
          setSearchParams((prev) => {
            const newParams = new URLSearchParams(prev);
            newParams.set("memory", memory);
            return newParams;
          });
        }}
        computeOptionClassName={(memory: string) =>
          memoryOptionIsAvailable(memory)
            ? ""
            : "text-decoration-line-through text-muted"
        }
      />
    </div>
  );
}
