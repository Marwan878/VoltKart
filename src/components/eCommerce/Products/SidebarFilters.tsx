import { Card, Col } from "react-bootstrap";
import { SetURLSearchParams } from "react-router-dom";
import Categories from "./Categories";
import Colors from "./Colors";
import PriceRange from "./PriceRange";
import Search from "./Search";

export default function SidebarFilters({
  searchTerm,
  searchParams,
  setSearchParams,
  colors,
  priceRange,
  selectedCategory,
  selectedColor,
}: {
  searchTerm: string;
  searchParams: URLSearchParams;
  selectedCategory: string;
  priceRange: [number, number];
  colors: string[];
  selectedColor: string;
  setSearchParams: SetURLSearchParams;
}) {
  return (
    <Col lg={3} className="mb-4">
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <Search
            searchTerm={searchTerm}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />

          <Categories selectedCategory={selectedCategory} />
          <PriceRange
            range={priceRange}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />

          {colors.length > 0 && (
            <Colors
              colors={colors}
              searchParams={searchParams}
              selectedColor={selectedColor}
              setSearchParams={setSearchParams}
            />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}
