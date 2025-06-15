import sortStorageUnits from "@utils/sortStorageUnits";
import { useSearchParams } from "react-router-dom";
import CheckboxFilter from "../Filter/CheckboxFilter";
import Option from "../StorageOption/StorageOption";

import styles from "../style.module.css";
import { getUniqueElements } from "@utils/index";

export default function MemoryOptions({
  options,
  heading,
  onChange,
  computeOptionClassName = () => "",
}: {
  readonly options: string[];
  readonly heading: string;
  readonly onChange: (memory: string) => void;
  readonly computeOptionClassName?: (memory: string) => string;
}) {
  const [searchParams] = useSearchParams();
  const selectedMemory = searchParams.get("memory") ?? "";

  return (
    <CheckboxFilter<string>
      className="d-flex mb-2"
      optionsContainerClassName="d-flex flex-wrap gap-1 ms-2"
      computeCheckboxId={(memory: string) => memory}
      computeIsSelected={(memory: string) => selectedMemory === memory}
      onChange={onChange}
      heading={heading}
      label={(memory: string) => (
        <Option
          className={`${styles.checkbox} ${computeOptionClassName(memory)} ${
            memory === selectedMemory ? "bg-primary text-white" : "border-black"
          }`}
        >
          {memory}
        </Option>
      )}
      options={sortStorageUnits(getUniqueElements(options))}
    />
  );
}
