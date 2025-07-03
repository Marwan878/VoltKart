import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.css";

const MainSkeleton = () => {
  return (
    <Container fluid>
      {/* Metrics Cards Skeleton */}
      <Row className="g-3 mb-4">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <Col xs={12} sm={6} lg={3} key={index}>
              <div
                className={`${styles.skeleton} ${styles.metricCardSkeleton}`}
              >
                <div
                  className={`${styles.skeleton} ${styles.metricTitleSkeleton} mb-3`}
                ></div>
                <div
                  className={`${styles.skeleton} ${styles.metricValueSkeleton}`}
                ></div>
              </div>
            </Col>
          ))}
      </Row>

      {/* Charts Skeleton */}
      <Row className="mb-4">
        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
          <div className={`${styles.skeleton} ${styles.chartSkeleton}`}></div>
        </Col>
        <Col xs={12} lg={6}>
          <div className={`${styles.skeleton} ${styles.chartSkeleton}`}></div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSkeleton;
