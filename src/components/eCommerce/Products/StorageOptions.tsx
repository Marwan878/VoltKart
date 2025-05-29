import CheckboxFilter from "./CheckboxFilter";

import styles from "./style.module.css";

export default function StorageOptions({
  options,
  selectedStorage,
}: {
  options: string[];
  selectedStorage: string;
}) {
  return (
    <CheckboxFilter
      affectedParameter="storage"
      computeIsSelected={(storage: string) => selectedStorage === storage}
      computeNewParameterValue={(storage: string) => storage}
      heading="Built in Storage"
      label={(storage: string) => (
        <span
          style={{ cursor: "pointer", minWidth: "2.5rem", fontSize: "0.8rem" }}
          className={`border-1 p-1 border d-inline-block text-center ${
            styles.checkbox
          } ${
            selectedStorage === storage
              ? "bg-primary text-white"
              : "border-black"
          }`}
        >
          {storage}
        </span>
      )}
      options={options}
      computeCheckboxId={(storage: string) => `storage-${storage}`}
    />
  );
}
