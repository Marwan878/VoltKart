import useProducts from "@hooks/useProducts";
import { useMemo } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import { SidebarFilters, MainContent } from "@components/eCommerce";

export default function Products() {
  const { loading, error, productsFullInfo: products } = useProducts();

  const { productId: selectedCategory } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedColor = searchParams.get("selectedColor") ?? "";
  const sortBy = searchParams.get("sortBy") ?? "default";
  const searchTerm = searchParams.get("searchTerm") ?? "";
  const priceRange = (searchParams
    .get("priceRange")
    ?.split("-")
    .map(Number) ?? [0, 500]) as [number, number];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        !selectedCategory || product.categories.includes(selectedCategory);

      const matchesColor =
        !selectedColor ||
        product.optionCombinations.some(
          (option) => option.color === selectedColor
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
  }, [products, searchTerm, selectedCategory, selectedColor, priceRange]);

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

  if (!selectedCategory) {
    return null;
  }

  // if (loading) return <Loading />;
  // if (error)
  //   return <div className="alert alert-danger">Error loading products</div>;

  return (
    <Container fluid className="py-4">
      <Row>
        <SidebarFilters
          colors={colors}
          priceRange={priceRange}
          searchParams={searchParams}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          setSearchParams={setSearchParams}
        />

        <MainContent
          sortedProducts={sortedProducts}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          sortBy={sortBy}
        />
      </Row>
    </Container>
  );
}
