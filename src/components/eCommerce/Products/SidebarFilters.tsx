import { TProduct } from "@types";
import { Card, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Brands from "./Brands";
import Categories from "./Categories";
import Colors from "./Colors";
import MemoryOptions from "./MemoryOptions";
import PriceRange from "./PriceRange";
import Search from "./Search";
import StorageOptions from "./StorageOptions";

export default function SidebarFilters({ products }: { products: TProduct[] }) {
  const [searchParams] = useSearchParams();

  const selectedMemory = searchParams.get("memory") ?? "";
  const selectedStorage = searchParams.get("storage") ?? "";
  const selectedBrand = searchParams.get("brand") ?? "";
  const selectedColorsNames = searchParams.get("colors")?.split(",") ?? [];

  // Get unique categories and colors for filters
  const colors = [
    ...new Set(
      products.flatMap((p) =>
        p.optionCombinations.map((option) => option.color)
      )
    ),
  ];
  const memoryOptions = [
    ...new Set(
      products.flatMap((p) =>
        p.optionCombinations.map((option) => option.memory)
      )
    ),
  ];
  const storageOptions = [
    ...new Set(
      products.flatMap((p) =>
        p.optionCombinations.map((option) => option.storage)
      )
    ),
  ];
  const brands = [...new Set(products.map((product) => product.brand))];

  return (
    <Col lg={3} className="mb-4">
      <Card className="border-0">
        <Card.Body>
          <Search />
          <Categories />
          <PriceRange />

          {colors.length > 0 && (
            <Colors
              options={colors}
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
        </Card.Body>
      </Card>
    </Col>
  );
}
