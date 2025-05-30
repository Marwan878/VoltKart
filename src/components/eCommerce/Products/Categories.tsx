import { CATEGORIES } from "@constants";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";

import styles from "./style.module.css";

export default function Categories() {
  const { category: selectedCategory } = useParams<{
    category: string;
  }>();
  return (
    <div className="mb-4">
      <h6 className="fw-bold mb-3">Categories</h6>
      <ul>
        {CATEGORIES.map((category) => (
          <li key={category.id} className={`mb-1 ${styles.category}`}>
            <Nav.Link
              active={category.id === selectedCategory}
              href={`/products/${category.id}`}
              aria-current={
                category.id === selectedCategory ? "page" : undefined
              }
              className="d-flex align-items-center justify-content-between"
            >
              <span className={styles.categoryName}>
                {category.displayName}
              </span>
              <span
                className={`${styles.quantity} ${
                  selectedCategory === category.id ? styles.selected : ""
                }`}
              >
                {0}
              </span>
            </Nav.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
