import { getUniqueElements, sortStorageUnits } from "@utils/index";
import { useSearchParams } from "react-router-dom";
import CheckboxFilter from "../Filter/CheckboxFilter";
import Option from "../StorageOption/StorageOption";

import styles from "../style.module.css";

type StorageOptionsProps = {
  options: string[];
  heading: string;
  onChange: (storage: string) => void;
  computeOptionClassName?: (storage: string) => string;
  optionsContainerClassName?: string;
  className?: string;
};
export default function StorageOptions({
  options,
  heading,
  computeOptionClassName = () => "",
  optionsContainerClassName = "",
  className = "",
  onChange,
}: Readonly<StorageOptionsProps>) {
  const [searchParams] = useSearchParams();
  const selectedStorage = new Set(
    searchParams.get("storage")?.split(",") ?? []
  );

  return (
    <CheckboxFilter<string>
      computeCheckboxId={(storage: string) => storage}
      className={className}
      optionsContainerClassName={optionsContainerClassName}
      heading={heading}
      label={(storage: string) => (
        <Option<"button">
          className={`${styles.checkbox} ${computeOptionClassName(storage)} ${
            selectedStorage.has(storage)
              ? "bg-primary text-white"
              : "border-black"
          }`}
          as="button"
          onClick={() => onChange(storage)}
        >
          {storage}
        </Option>
      )}
      options={sortStorageUnits(getUniqueElements(options))}
    />
  );
}
