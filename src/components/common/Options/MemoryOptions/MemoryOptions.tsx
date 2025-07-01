import sortStorageUnits from "@utils/sortStorageUnits";
import { useSearchParams } from "react-router-dom";
import CheckboxFilter from "../Filter/CheckboxFilter";
import Option from "../StorageOption/StorageOption";
import { getUniqueElements } from "@utils/index";

import styles from "../style.module.css";

type MemoryOptionsProps = {
  options: string[];
  heading: string;
  onChange: (memory: string) => void;
  computeOptionClassName?: (memory: string) => string;
  className?: string;
  optionsContainerClassName?: string;
};

export default function MemoryOptions({
  options,
  heading,
  onChange,
  computeOptionClassName = () => "",
  className = "",
  optionsContainerClassName = "",
}: Readonly<MemoryOptionsProps>) {
  const [searchParams] = useSearchParams();
  const selectedMemory = new Set(searchParams.get("memory")?.split(",") ?? []);

  return (
    <CheckboxFilter<string>
      className={className}
      optionsContainerClassName={optionsContainerClassName}
      computeCheckboxId={(memory: string) => memory}
      heading={heading}
      label={(memory: string) => (
        <Option<"button">
          as="button"
          type="button"
          className={`${styles.checkbox} ${computeOptionClassName(memory)} ${
            selectedMemory.has(memory)
              ? "bg-primary text-white"
              : "border-black"
          }`}
          onClick={() => onChange(memory)}
        >
          {memory}
        </Option>
      )}
      options={sortStorageUnits(getUniqueElements(options))}
    />
  );
}
