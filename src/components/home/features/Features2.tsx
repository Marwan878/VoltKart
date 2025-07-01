import { RevealOnScroll } from "@components/ui";
import { FEATURES2 } from "@constants";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.css";

export default function Features2() {
  return (
    <div className={styles.features2}>
      <Container>
        <Row>
          {FEATURES2.map((feature) => (
            <Col key={feature.body} xs={6} md={3}>
              <RevealOnScroll className="d-flex flex-column align-items-center mb-4">
                <img
                  src={feature.imageUrl}
                  alt=""
                  className="mb-4"
                  style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    aspectRatio: 1,
                    width: "5rem",
                  }}
                />
                <span className="fw-bold">{feature.heading}</span>
                <p className="mt-2 text-center">{feature.body}</p>
              </RevealOnScroll>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
