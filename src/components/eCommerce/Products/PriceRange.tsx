import Slider from "rc-slider";
import { SetURLSearchParams } from "react-router-dom";

import "rc-slider/assets/index.css";

export default function PriceRange({
  range,
  searchParams,
  setSearchParams,
}: {
  range: [number, number];
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}) {
  return (
    <div className="my-4" style={{ maxWidth: 300 }}>
      <h5 className="mb-3">Filter By Price</h5>

      <Slider
        range
        allowCross={false}
        min={0}
        max={5000}
        value={range}
        onChange={(range) =>
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
    </div>
  );
}
