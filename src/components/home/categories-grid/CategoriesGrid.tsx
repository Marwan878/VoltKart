import { CATEGORIES } from "@constants";
import styles from "../style.module.css";
import { Container } from "react-bootstrap";
import type { CSSProperties } from "react";

export default function CategoriesGrid() {
  const gridCount = 2;
  const itemsPerGrid = Math.floor(CATEGORIES.length / gridCount);

  return (
    <Container
      fluid
      className={`d-flex flex-column flex-xl-row gap-3 ${styles.categories}`}
    >
      {Array.from({ length: gridCount }).map((_, i) => (
        <div className={styles.bentoGrid} key={i}>
          {CATEGORIES.slice(i * itemsPerGrid, itemsPerGrid * (i + 1)).map(
            (cateogry) => (
              <a
                key={cateogry.displayName}
                href={cateogry.link}
                style={
                  { "--bg-img": `url(${cateogry.imageUrl})` } as CSSProperties
                }
              >
                <span>{cateogry.displayName}</span>
              </a>
            )
          )}
        </div>
      ))}
    </Container>
  );
}
