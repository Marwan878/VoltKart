import CheckboxFilter from "./CheckboxFilter";

import styles from "./style.module.css";

export default function Brands({
  options,
  selectedBrand,
}: {
  options: string[];
  selectedBrand: string;
}) {
  return (
    <CheckboxFilter
      affectedParameter="brand"
      computeIsSelected={(brand: string) => brand === selectedBrand}
      computeNewParameterValue={(brand) => brand}
      heading="Filter by Brand"
      label={(brand: string) => (
        <span
          style={{ fontSize: "0.8rem" }}
          className="d-flex justify-content-between"
        >
          <span>{brand}</span>
          <span className="d-inline-block ms-auto">0</span>
        </span>
      )}
      options={options}
      computeCheckboxId={(brand: string) => `brand-${brand}`}
    />
  );
}
