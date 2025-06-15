import { getUniqueElements, sortStorageUnits } from "@utils/index";
import { useSearchParams } from "react-router-dom";
import CheckboxFilter from "../Filter/CheckboxFilter";
import Option from "../StorageOption/StorageOption";

import styles from "../style.module.css";

export default function StorageOptions({
  options,
  heading,
  onChange,
  computeOptionClassName = () => "",
}: {
  readonly options: string[];
  readonly heading: string;
  readonly onChange: (storage: string) => void;
  readonly computeOptionClassName?: (storage: string) => string;
}) {
  const [searchParams] = useSearchParams();
  const selectedStorage = searchParams.get("storage") ?? "";

  return (
    <CheckboxFilter<string>
      computeCheckboxId={(storage: string) => storage}
      computeIsSelected={(storage: string) => selectedStorage === storage}
      onChange={onChange}
      className="d-flex mb-2"
      optionsContainerClassName="d-flex flex-wrap gap-1 ms-2"
      heading={heading}
      label={(storage: string) => (
        <Option
          className={`${styles.checkbox} ${computeOptionClassName(storage)} ${
            selectedStorage === storage
              ? "bg-primary text-white"
              : "border-black"
          }`}
        >
          {storage}
        </Option>
      )}
      options={sortStorageUnits(getUniqueElements(options))}
    />
  );
}
