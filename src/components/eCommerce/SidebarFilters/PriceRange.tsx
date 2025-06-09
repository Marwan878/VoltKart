import Slider from "rc-slider";
import { useSearchParams } from "react-router-dom";
import Filter from "./FilterContainer";

import "rc-slider/assets/index.css";

export default function PriceRange({
  mostExpensiveProductPrice,
  cheapestProductPrice,
}: {
  readonly mostExpensiveProductPrice: number;
  readonly cheapestProductPrice: number;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const range = (searchParams.get("priceRange")?.split("-").map(Number) ?? [
    cheapestProductPrice,
    mostExpensiveProductPrice,
  ]) as [number, number];

  return (
    <Filter heading="Filter by Price">
      <Slider
        range
        allowCross={false}
        min={cheapestProductPrice}
        max={mostExpensiveProductPrice}
        value={range}
        onChange={(range: [number, number]) =>
          setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            priceRange: `${range[0]}-${range[1]}`,
          })
        }
        trackStyle={[{ backgroundColor: "#0d6efd", height: 6 }]}
        handleStyle={[
          { borderColor: "#0d6efd", backgroundColor: "#0d6efd" },
          { borderColor: "#0d6efd", backgroundColor: "#0d6efd" },
        ]}
        railStyle={{ backgroundColor: "#ddd", height: 6 }}
      />

      <span className="text-muted mt-2 d-inline-block">
        Price: ${range[0]} — ${range[1]}
      </span>
    </Filter>
  );
}
