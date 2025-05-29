import CheckboxFilter from "./CheckboxFilter";

import styles from "./style.module.css";

export default function MemoryOptions({
  options,
  selectedMemory,
}: {
  options: string[];
  selectedMemory: string;
}) {
  return (
    <CheckboxFilter
      affectedParameter="memory"
      computeIsSelected={(memory: string) => selectedMemory === memory}
      computeNewParameterValue={(memory: string) => memory}
      heading="Ram"
      label={(memory: string) => (
        <span
          style={{ cursor: "pointer", minWidth: "2.5rem", fontSize: "0.8rem" }}
          className={`border-1 p-1 border d-inline-block text-center ${
            styles.checkbox
          } ${
            memory === selectedMemory ? "bg-primary text-white" : "border-black"
          }`}
        >
          {memory}
        </span>
      )}
      options={options}
      computeCheckboxId={(memory: string) => `memory-${memory}`}
    />
  );
}
