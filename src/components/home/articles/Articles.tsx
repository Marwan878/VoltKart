import { Col, Container, Row } from "react-bootstrap";
import { SectionHeading } from "@components/ui";
import { ARTICLES } from "@constants/index";
import ArticleCard from "./ArticleCard";
import styles from "../style.module.css";

export default function Articles() {
  return (
    <section className={styles.articles}>
      <Container>
        <SectionHeading>Hi-Tech News</SectionHeading>
        <Row xs={1} md={2} lg={3} className="g-4">
          {ARTICLES.map((article, i) => (
            <Col key={i}>
              <ArticleCard article={article} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
