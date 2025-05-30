import { Check } from "lucide-react";
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
        <span className={styles.brand}>
          <div className="d-flex align-items-center gap-2">
            <Check
              size={15}
              style={{
                visibility: brand === selectedBrand ? "visible" : "hidden",
                color: "var(--light-blue)",
              }}
            />
            <span className={styles.brandName}>{brand}</span>
          </div>
          <span
            className={`${styles.quantity} ${
              brand === selectedBrand ? styles.selected : ""
            }`}
          >
            0
          </span>
        </span>
      )}
      options={options}
      computeCheckboxId={(brand: string) => `brand-${brand}`}
    />
  );
}
