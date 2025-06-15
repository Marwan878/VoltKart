import { TColor } from "@types";
import { getUniqueObjects } from "@utils";
import { useSearchParams } from "react-router-dom";
import ColorOption from "../ColorOption/ColorOption";
import CheckboxFilter from "../Filter/CheckboxFilter";

export default function ColorOptions({
  options,
  showQuantity,
  showColorName,
  heading,
  onChange,
}: {
  readonly options: TColor[];
  readonly showQuantity?: boolean;
  readonly showColorName?: boolean;
  readonly heading: string;
  readonly onChange: (color: TColor) => void;
}) {
  const [searchParams] = useSearchParams();

  const selectedColorsNames = searchParams.get("colors")?.split(",") ?? [];

  return (
    <CheckboxFilter<TColor>
      computeIsSelected={(color: TColor) =>
        selectedColorsNames.includes(color.name)
      }
      onChange={onChange}
      className="d-flex mb-2"
      optionsContainerClassName="d-flex flex-wrap gap-1 ms-1"
      heading={heading}
      label={(color: TColor) => (
        <ColorOption
          color={color}
          isSelected={selectedColorsNames.includes(color.name)}
          showColorName={showColorName}
          showQuantity={showQuantity}
        />
      )}
      options={getUniqueObjects(options, "name")}
      computeCheckboxId={(color: TColor) => `color-${color.name}`}
    />
  );
}
