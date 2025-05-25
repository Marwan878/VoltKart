import { Card } from "react-bootstrap";

import type { TProduct } from "@/types";
import styles from "../style.module.css";

export default function ProductCard({ product }: { product: TProduct }) {
  return (
    <Card
      className={`border-0 text-center position-relative ${styles.productCard}`}
    >
      {product.price.discountPercent > 0 && (
        <span
          style={{
            width: "2.5rem",
            backgroundColor: "var(--light-blue)",
            zIndex: 6,
          }}
          className={`${styles.tag}`}
        >{`-${product.price.discountPercent}%`}</span>
      )}
      {product.isNew && (
        <span
          style={{
            width: "2rem",
            top: "2rem",
            left: "0.25rem",
            backgroundColor: "black",
            zIndex: 5,
          }}
          className={`${styles.tag}`}
        >
          new
        </span>
      )}

      <div className={styles.imageContainer}>
        <img
          src={product.imageUrls.main}
          alt="default"
          className={styles.baseImage}
        />
        <img
          src={product.imageUrls.hover}
          alt="hover"
          className={styles.hoverImage}
        />
      </div>

      <Card.Body>
        <Card.Subtitle
          className="text-truncate text-secondary mb-2"
          style={{ fontSize: "0.6rem" }}
          title={product.categories.join(", ")}
        >
          {product.categories.join(", ")}
        </Card.Subtitle>
        <Card.Title className="fs-6 text-truncate" title={product.name}>
          {product.name}
        </Card.Title>
        <Card.Text>
          {product.price.discountPercent > 0 && (
            <del
              className="text-secondary"
              style={{ fontSize: "0.8rem" }}
            >{`$${product.price.original}`}</del>
          )}{" "}
          <span style={{ fontSize: "1rem" }}>
            {`$${product.price.discounted}`}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
