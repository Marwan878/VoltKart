import { CATEGORIES } from "@constants";
import { Nav } from "react-bootstrap";

export default function Categories({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  return (
    <div className="mb-4">
      <h6 className="fw-bold mb-3">Categories</h6>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.id} className="mb-1">
            <Nav.Link
              active={category.id === selectedCategory}
              href={`/products/${category.id}`}
            >
              {category.displayName}
            </Nav.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
