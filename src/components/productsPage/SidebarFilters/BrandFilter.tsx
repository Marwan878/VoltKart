import CheckboxFilter from "@components/common/Options/Filter/CheckboxFilter";
import { useAppSelector } from "@store/hooks";
import { Check } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import FilterLabel from "./FilterLabel/FilterLabel";

import { TProduct } from "@types";

type BrandFilterProps = {
  products: TProduct[];
};

export default function BrandFilter({ products }: Readonly<BrandFilterProps>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const brandsProductsCount = useAppSelector(
    (state) => state.products.brandsProductsCount
  );

  const brands = [...new Set(products.map((product) => product.brand))];
  const selectedBrands = new Set(searchParams.get("brands")?.split(",") ?? []);

  if (brands.length === 0) return null;

  const handleBrandChange = (brand: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (selectedBrands.has(brand)) {
      if (selectedBrands.size === 1) {
        newSearchParams.delete("brands");
      } else {
        const newBrands = Array.from(selectedBrands).filter((b) => b !== brand);
        newSearchParams.set("brands", newBrands.join(","));
      }
    } else {
      newSearchParams.set("brands", [...selectedBrands, brand].join(","));
    }

    setSearchParams(newSearchParams);
  };

  return (
    <CheckboxFilter<string>
      heading="Filter by Brand"
      label={(brand: string) => (
        <FilterLabel<"button">
          selected={selectedBrands.has(brand)}
          quantity={brandsProductsCount[brand] ?? 0}
          onClick={() => handleBrandChange(brand)}
          as="button"
        >
          <Check
            size={20}
            style={{
              visibility: selectedBrands.has(brand) ? "visible" : "hidden",
              color: "var(--light-blue)",
            }}
          />
          {brand}
        </FilterLabel>
      )}
      options={brands}
      computeCheckboxId={(brand: string) => `brand-${brand}`}
    />
  );
}
