import Slider from "rc-slider";
import { useSearchParams } from "react-router-dom";

import { TProduct } from "@types";

import "rc-slider/assets/index.css";
import { useEffect, useRef, useState } from "react";

type PriceFilterProps = {
  products: TProduct[];
};

export default function PriceFilter({ products }: Readonly<PriceFilterProps>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const discountedPrices = products.flatMap((product) =>
    product.optionCombinations.map(
      (combination) => combination.price.discounted
    )
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const cheapestProductPrice = Math.min(...discountedPrices);

  const mostExpensiveProductPrice = Math.max(...discountedPrices);

  const [range, setRange] = useState<[number, number]>(() => {
    const searchParamsRange = searchParams
      .get("priceRange")
      ?.split("-")
      .map(Number) as [number, number];

    return (
      searchParamsRange ?? [cheapestProductPrice, mostExpensiveProductPrice]
    );
  });

  if (discountedPrices.length === 0) return null;

  return (
    <>
      <h5 className="mb-3">Filter by Price</h5>
      <Slider
        range
        allowCross={false}
        min={cheapestProductPrice}
        max={mostExpensiveProductPrice}
        value={range}
        onChange={(range) => {
          if (!Array.isArray(range)) return;

          setRange(range as [number, number]);

          if (timeoutRef.current) clearTimeout(timeoutRef.current);

          timeoutRef.current = setTimeout(() => {
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              priceRange: `${range[0]}-${range[1]}`,
            });
          }, 500);
        }}
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
    </>
  );
}
