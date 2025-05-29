import { TColor } from "@types";

import CheckboxFilter from "./CheckboxFilter";

export default function Colors({
  options,
  selectedColorsNames,
}: {
  options: TColor[];
  selectedColorsNames: string[];
}) {
  return (
    <CheckboxFilter
      affectedParameter="colors"
      computeIsSelected={(color: TColor) =>
        selectedColorsNames.includes(color.name)
      }
      computeNewParameterValue={(color) => color.name}
      heading="Filter by Color"
      label={(color: TColor) => (
        <span className="d-flex align-items-center">
          <span
            className="me-2 rounded-circle"
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: color.hex,
            }}
          ></span>
          {color.name}
        </span>
      )}
      options={options}
      computeCheckboxId={(color: TColor) => `color-${color.name}`}
    />
  );
}
