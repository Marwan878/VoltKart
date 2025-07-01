import { CATEGORIES } from "@constants";
import { useAppSelector } from "@store/hooks";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FilterLabel from "./FilterLabel/FilterLabel";

export default function Categories() {
  const { category: selectedCategory } = useParams<{
    category: string;
  }>();

  const categoriesProductsCount = useAppSelector(
    (state) => state.products.categoriesProductsCount
  );

  return (
    <div className="mb-4">
      <h6 className="fw-bold mb-3">Categories</h6>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.id} className={`mb-1`}>
            <Nav.Link
              href={`/products/${category.id}`}
              aria-current={
                category.id === selectedCategory ? "page" : undefined
              }
            >
              <FilterLabel
                selected={category.id === selectedCategory}
                quantity={categoriesProductsCount[category.id] ?? 0}
              >
                {category.displayName}
              </FilterLabel>
            </Nav.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
