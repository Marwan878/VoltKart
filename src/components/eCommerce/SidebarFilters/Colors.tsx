import { useAppSelector } from "@store/hooks";
import { TColor } from "@types";
import CheckboxFilter from "./CheckboxFilter";

import styles from "./style.module.css";

export default function Colors({
  options,
  selectedColorsNames,
  containerClassName,
}: {
  readonly options: TColor[];
  readonly selectedColorsNames: string[];
  readonly containerClassName?: string;
}) {
  const colorsProductsCount = useAppSelector(
    (state) => state.products.colorsProductsCount
  );

  return (
    <CheckboxFilter
      containerClassName={containerClassName}
      affectedParameter="colors"
      computeIsSelected={(color: TColor) =>
        selectedColorsNames.includes(color.name)
      }
      computeNewParameterValue={(color) => color.name}
      heading="Filter by Color"
      label={(color: TColor) => (
        <span
          className={`d-flex align-items-center text-capitalize w-100 ${styles.color}`}
          style={{ cursor: "pointer" }}
        >
          <span
            className={`me-2 rounded-circle border border-2 ${
              selectedColorsNames.includes(color.name) ? "border-black" : ""
            }`}
            style={{
              width: "1.5rem",
              height: "1.5rem",
              backgroundColor: color.hex,
            }}
          />
          <div className="d-flex align-items-center justify-content-between flex-grow-1">
            <span>{color.name}</span>
            <span
              className={`${styles.quantity} ${
                selectedColorsNames.includes(color.name) ? styles.selected : ""
              }`}
            >
              {colorsProductsCount[color.name] ?? 0}
            </span>
          </div>
        </span>
      )}
      options={options}
      computeCheckboxId={(color: TColor) => `color-${color.name}`}
    />
  );
}
