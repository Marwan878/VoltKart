import { TColor, TProduct } from "@types";
import { getUniqueObjects } from "@utils/index";
import { Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Brands from "./Brands";
import Categories from "./Categories";
import Colors from "../common/Options/ColorOptions/ColorOptions";
import MemoryOptions from "./MemoryOptions";
import PriceRange from "./PriceRange";
import Search from "./Search";
import StorageOptions from "./StorageOptions";

export default function SidebarFilters({
  products,
}: {
  readonly products: TProduct[];
}) {
  const [searchParams] = useSearchParams();

  const selectedMemory = searchParams.get("memory") ?? "";
  const selectedStorage = searchParams.get("storage") ?? "";
  const selectedBrand = searchParams.get("brand") ?? "";
  const selectedColorsNames = searchParams.get("colors")?.split(",") ?? [];

  const cheapestProductPrice = Math.min(
    ...products.flatMap((product) =>
      product.optionCombinations.map(
        (combination) => combination.price.discounted
      )
    )
  );
  const mostExpensiveProductPrice = Math.max(
    ...products.flatMap((product) =>
      product.optionCombinations.map(
        (combination) => combination.price.discounted
      )
    )
  );

  const colors = products
    .flatMap((p) => p.optionCombinations.map((option) => option.color))
    .filter(Boolean) as TColor[];
  const uniqueColors = getUniqueObjects(colors, "name");

  const memoryOptions = [
    ...new Set(
      products
        .flatMap((p) => p.optionCombinations.map((option) => option.memory))
        .filter(Boolean)
    ),
  ] as string[];

  const storageOptions = [
    ...new Set(
      products.flatMap((p) =>
        p.optionCombinations.map((option) => option.storage)
      )
    ),
  ] as string[];

  const brands = [...new Set(products.map((product) => product.brand))];

  return (
    <Col lg={3} className="mb-4">
      <div className="border-0">
        <Search />
        <Categories />

        {products.length > 0 && (
          <PriceRange
            mostExpensiveProductPrice={mostExpensiveProductPrice}
            cheapestProductPrice={cheapestProductPrice}
          />
        )}

        {colors.length > 0 && (
          <Colors
            options={uniqueColors}
            selectedColorsNames={selectedColorsNames}
          />
        )}

        {memoryOptions.length > 0 && (
          <MemoryOptions
            options={memoryOptions}
            selectedMemory={selectedMemory}
          />
        )}

        {storageOptions.length > 0 && (
          <StorageOptions
            options={storageOptions}
            selectedStorage={selectedStorage}
          />
        )}

        {brands.length > 0 && (
          <Brands options={brands} selectedBrand={selectedBrand} />
        )}
      </div>
    </Col>
  );
}
