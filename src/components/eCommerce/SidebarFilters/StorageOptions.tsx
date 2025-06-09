import { sortStorageUnits } from "@utils/index";
import CheckboxFilter from "./CheckboxFilter";
import Option from "./Option";

import styles from "./style.module.css";

export default function StorageOptions({
  options,
  selectedStorage,
}: {
  readonly options: string[];
  readonly selectedStorage: string;
}) {
  return (
    <CheckboxFilter
      containerClassName="d-flex flex-wrap"
      affectedParameter="storage"
      computeIsSelected={(storage: string) => selectedStorage === storage}
      computeNewParameterValue={(storage: string) => storage.replace(/\s/g, "")}
      heading="Built in Storage"
      label={(storage: string) => (
        <Option
          className={`${styles.checkbox} ${
            selectedStorage === storage
              ? "bg-primary text-white"
              : "border-black"
          }`}
        >
          {storage}
        </Option>
      )}
      options={sortStorageUnits(options)}
      computeCheckboxId={(storage: string) => `storage-${storage}`}
    />
  );
}
