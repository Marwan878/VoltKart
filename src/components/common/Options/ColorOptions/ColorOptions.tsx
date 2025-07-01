import ColorSwatch from "@components/common/ColorSwatch/ColorSwatch";
import FilterLabel from "@components/productsPage/SidebarFilters/FilterLabel/FilterLabel";
import { useAppSelector } from "@store/hooks";
import { getUniqueObjects } from "@utils";
import { useSearchParams } from "react-router-dom";
import CheckboxFilter from "../Filter/CheckboxFilter";

import { TColor } from "@types";

type ColorOptionsProps = {
  options: TColor[];
  showQuantity?: boolean;
  showColorName?: boolean;
  heading: string;
  onChange: (color: TColor) => void;
  className?: string;
  optionsContainerClassName?: string;
};

export default function ColorOptions({
  options,
  showQuantity,
  showColorName,
  heading,
  onChange,
  className = "",
  optionsContainerClassName = "",
}: Readonly<ColorOptionsProps>) {
  const [searchParams] = useSearchParams();

  const selectedColorsNames = searchParams.get("colors")?.split(",") ?? [];

  const colorsProductsCount = useAppSelector(
    (state) => state.products.colorsProductsCount
  );

  return (
    <CheckboxFilter<TColor>
      className={className}
      optionsContainerClassName={optionsContainerClassName}
      heading={heading}
      label={(color: TColor) => (
        <FilterLabel
          onClick={() => onChange(color)}
          selected={selectedColorsNames.includes(color.name)}
          quantity={showQuantity ? colorsProductsCount[color.name] : undefined}
        >
          <ColorSwatch
            color={color}
            isSelected={selectedColorsNames.includes(color.name)}
            as="span"
          />
          {showColorName && color.name}
        </FilterLabel>
      )}
      options={getUniqueObjects(options, "name")}
      computeCheckboxId={(color: TColor) => `color-${color.name}`}
    />
  );
}
