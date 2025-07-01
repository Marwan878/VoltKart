import { Col } from "react-bootstrap";
import BrandFilter from "./BrandFilter";
import Categories from "./Categories";
import ColorFilter from "./ColorFilter";
import MemoryFilter from "./MemoryFilter";
import PriceFilter from "./PriceFilter";
import Search from "./Search";
import StorageFilter from "./StorageFilter";

import { TProduct } from "@types";

type SidebarFiltersProps = {
  products: TProduct[];
};

export default function SidebarFilters({
  products,
}: Readonly<SidebarFiltersProps>) {
  return (
    <Col lg={3} className="mb-4">
      <div className="border-0">
        <Search />
        <Categories />

        <PriceFilter products={products} />
        <ColorFilter products={products} />
        <MemoryFilter products={products} />
        <StorageFilter products={products} />
        <BrandFilter products={products} />
      </div>
    </Col>
  );
}
