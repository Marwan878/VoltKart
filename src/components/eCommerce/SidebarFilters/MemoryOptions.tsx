import sortStorageUnits from "@utils/sortStorageUnits";
import CheckboxFilter from "./CheckboxFilter";
import Option from "./Option";

import styles from "./style.module.css";

export default function MemoryOptions({
  options,
  selectedMemory,
}: {
  readonly options: string[];
  readonly selectedMemory: string;
}) {
  return (
    <CheckboxFilter
      containerClassName="d-flex flex-wrap"
      affectedParameter="memory"
      computeIsSelected={(memory: string) => selectedMemory === memory}
      computeNewParameterValue={(memory: string) => memory.replace(/\s/g, "")}
      heading="Ram"
      label={(memory: string) => (
        <Option
          className={`${styles.checkbox} ${
            memory === selectedMemory ? "bg-primary text-white" : "border-black"
          }`}
        >
          {memory}
        </Option>
      )}
      options={sortStorageUnits(options)}
      computeCheckboxId={(memory: string) => `memory-${memory}`}
    />
  );
}
