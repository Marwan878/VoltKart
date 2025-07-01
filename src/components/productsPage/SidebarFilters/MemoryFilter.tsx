import MemoryOptions from "@components/common/Options/MemoryOptions/MemoryOptions";

import { TProduct } from "@types";
import { useSearchParams } from "react-router-dom";

type MemoryFilterProps = {
  products: TProduct[];
};

export default function MemoryFilter({
  products,
}: Readonly<MemoryFilterProps>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const memoryOptions = [
    ...new Set(
      products
        .flatMap((p) => p.optionCombinations.map((option) => option.ram))
        .filter(Boolean)
    ),
  ] as string[];

  if (memoryOptions.length === 0) return null;

  return (
    <MemoryOptions
      optionsContainerClassName="d-flex gap-2 mb-3"
      options={memoryOptions}
      heading="Memory"
      onChange={(memory) => {
        const newSearchParams = new URLSearchParams(searchParams);
        const selectedMemories = searchParams.get("memory")?.split(",") ?? [];

        if (selectedMemories.includes(memory)) {
          const newMemories = selectedMemories.filter((m) => m !== memory);
          if (newMemories.length === 0) {
            newSearchParams.delete("memory");
          } else {
            newSearchParams.set("memory", newMemories.join(","));
          }
        } else {
          newSearchParams.set(
            "memory",
            [...selectedMemories, memory].join(",")
          );
        }

        setSearchParams(newSearchParams);
      }}
    />
  );
}
