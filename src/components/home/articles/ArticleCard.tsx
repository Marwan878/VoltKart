import type { ARTICLES } from "@/constants";
import { File } from "lucide-react";
import { Card } from "react-bootstrap";
import styles from "../style.module.css";

export default function ArticleCard({
  article: { author, category, date, imageUrl, summary, title },
}: {
  article: (typeof ARTICLES)[number];
}) {
  return (
    <Card
      as={"article"}
      className={`position-relative h-100 border-0 shadow ${styles.article}`}
    >
      <div className={styles.articleImageContainer}>
        <Card.Img variant="top" src={imageUrl} />
        <span className="position-absolute top-0 start-0 bg-black px-2 py-1 text-white mt-1 ms-1">
          {category}
        </span>
        <span aria-hidden className={`position-absolute ${styles.fileIcon}`}>
          <File color="white" />
        </span>
      </div>
      <Card.Body className="d-flex flex-column">
        <div
          className="mt-auto d-flex align-items-center gap-2 mb-2"
          style={{ fontSize: "0.7rem" }}
        >
          <img
            src={author.imageUrl}
            alt={author.name}
            className="rounded-circle"
            style={{ width: "1.5rem" }}
          />
          <p>
            By <span style={{ color: "var(--light-blue)" }}>{author.name}</span>
          </p>
          <p className="text-muted">- {date}</p>
        </div>
        <Card.Title as={"a"} href="#" className="fw-bold mb-3 fs-5">
          {title}
        </Card.Title>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
    </Card>
  );
}
