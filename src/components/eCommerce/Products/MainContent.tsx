import { TProduct } from "@types";
import { useMemo } from "react";
import { Col } from "react-bootstrap";
import SortingFilter from "./SortingFilter";
import { useSearchParams } from "react-router-dom";
import useIsMobile from "@hooks/useIsMobile";

export default function MainContent({ products }: { products: TProduct[] }) {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") ?? "default";
  const isMobile = useIsMobile();

  const filteredProducts = useMemo(() => {
    const priceRange = (searchParams
      .get("priceRange")
      ?.split("-")
      .map(Number) ?? [0, 500]) as [number, number];
    const searchTerm = searchParams.get("searchTerm") ?? "";
    const selectedCategory = searchParams.get("category") ?? "";
    const selectedColorName = searchParams.get("color") ?? "";

    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        !selectedCategory || product.categories.includes(selectedCategory);

      const matchesColor =
        !selectedColorName ||
        product.optionCombinations.some(
          (option) => option.color.name === selectedColorName
        );

      const matchesPrice =
        product.optionCombinations.some(
          (option) => option.price.discounted >= priceRange[0]
        ) &&
        product.optionCombinations.some(
          (option) => option.price.discounted <= priceRange[1]
        );

      return matchesSearch && matchesCategory && matchesColor && matchesPrice;
    });
  }, [searchParams, products]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case "price-low":
        return sorted.sort(
          (a, b) =>
            Math.min(
              ...a.optionCombinations.map(
                (combination) => combination.price.discounted
              )
            ) -
            Math.min(
              ...b.optionCombinations.map(
                (combination) => combination.price.discounted
              )
            )
        );
      case "price-high":
        return sorted.sort(
          (a, b) =>
            Math.min(
              ...b.optionCombinations.map(
                (combination) => combination.price.discounted
              )
            ) -
            Math.min(
              ...a.optionCombinations.map(
                (combination) => combination.price.discounted
              )
            )
        );
      case "name-low":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-high":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);
  return (
    <Col lg={9}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <p className="text-muted mb-0 text-center w-100 mt-3">
          Showing all {sortedProducts.length} results
        </p>
        {!isMobile && <SortingFilter />}
      </div>

      {/* Products Grid */}

      {/* No products found */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-5">
          <h5 className="text-muted">No products found</h5>
          <p className="text-muted">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </Col>
  );
}
