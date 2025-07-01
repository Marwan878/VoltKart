import ColorOptions from "@components/common/Options/ColorOptions/ColorOptions";
import { getUniqueObjects } from "@utils";
import { useSearchParams } from "react-router-dom";

import { TColor, TProduct } from "@types";

type ColorFilterProps = {
  products: TProduct[];
};

export default function ColorFilter({ products }: Readonly<ColorFilterProps>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const colors = products
    .flatMap((p) => p.optionCombinations.map((option) => option.color))
    .filter(Boolean) as TColor[];
  const uniqueColors = getUniqueObjects(colors, "name");

  if (uniqueColors.length === 0) return null;

  return (
    <ColorOptions
      showQuantity
      showColorName
      options={uniqueColors}
      heading="Color options"
      className="my-4"
      onChange={(clickedColor) => {
        const newSearchParams = new URLSearchParams(searchParams);
        const currentColors = searchParams.get("colors")?.split(",") ?? [];

        if (currentColors.includes(clickedColor.name)) {
          const newColors = currentColors.filter(
            (color) => color !== clickedColor.name
          );

          if (newColors.length === 0) {
            newSearchParams.delete("colors");
          } else {
            newSearchParams.set("colors", newColors.join(","));
          }
        } else {
          newSearchParams.set(
            "colors",
            [...currentColors, clickedColor.name].join(",")
          );
        }

        setSearchParams(newSearchParams);
      }}
    />
  );
}
