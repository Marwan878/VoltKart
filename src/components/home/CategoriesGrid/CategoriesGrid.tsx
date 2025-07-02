import { CATEGORIES } from "@constants";
import type { CSSProperties } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export default function CategoriesGrid() {
  const gridCount = 2;
  const itemsPerGrid = Math.floor(CATEGORIES.length / gridCount);

  return (
    <Container
      fluid
      className={`d-flex gap-3 ${styles.categories}`}
      id="categories"
    >
      {Array.from({ length: gridCount }).map((_, i) => (
        <div className={styles.bentoGrid} key={i}>
          {CATEGORIES.slice(i * itemsPerGrid, itemsPerGrid * (i + 1)).map(
            (cateogry) => (
              <Link
                key={cateogry.displayName}
                to={`/products/${cateogry.id}`}
                style={
                  { "--bg-img": `url(${cateogry.imageUrl})` } as CSSProperties
                }
              >
                <span className={styles.categoryName}>
                  {cateogry.displayName}
                </span>
              </Link>
            )
          )}
        </div>
      ))}
    </Container>
  );
}
