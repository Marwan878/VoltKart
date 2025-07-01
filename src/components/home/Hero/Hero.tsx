import { Button, RevealOnScroll } from "@components/ui";
import { HERO_IMAGES, SCREEN_TO_BREAKPOINT } from "@constants";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./styles.module.css";

const maximumImageDisplacements = [25, 5, 15, 30];

export default function Hero() {
  const [cursorCoordinates, setCursorCoordinates] = useState(() => ({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  }));

  const computeTranslation = (index: number): { x: number; y: number } => {
    if (window.innerWidth < SCREEN_TO_BREAKPOINT.xl) {
      return {
        x: 0,
        y: 0,
      };
    }

    const screenCenter = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const maximumDisplacement = maximumImageDisplacements[index];
    const displacementPerPixel = {
      x: maximumDisplacement / screenCenter.x,
      y: maximumDisplacement / screenCenter.y,
    };

    const cursorOffset = {
      x: cursorCoordinates.x - screenCenter.x,
      y: cursorCoordinates.y - screenCenter.y,
    };

    return {
      x: displacementPerPixel.x * cursorOffset.x * (index < 2 ? 1 : -1),
      y: displacementPerPixel.y * cursorOffset.y * (index < 2 ? 1 : -1),
    };
  };

  useEffect(() => {
    if (window.innerWidth < SCREEN_TO_BREAKPOINT.xl) return;

    const handleCursorMove = (e: MouseEvent) => {
      setCursorCoordinates({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleCursorMove);

    return () => window.removeEventListener("mousemove", handleCursorMove);
  }, []);

  return (
    <Container>
      <Row className={`mt-4 ${styles.hero}`}>
        <Col
          className="d-flex flex-column container py-5"
          style={{ zIndex: 100, maxWidth: "37.875rem" }}
        >
          <RevealOnScroll>
            <h1 className={`fw-bold my-4 ${styles.productName}`}>
              Ecobee3 Thermo
            </h1>
          </RevealOnScroll>
          <RevealOnScroll>
            <h2 className={`fw-bold mb-3 ${styles.productHeadline}`}>
              Smart Home Solutions
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="lh-base mb-2" style={{ fontSize: "1.5rem" }}>
              Experience a new level of comfort and energy savings with ecobee3
              Lite smart thermostat.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <p className="mb-4 mt-1" style={{ fontSize: "1rem" }}>
              Integrates seamlessly with your preferred smart home system.
            </p>
          </RevealOnScroll>
          <RevealOnScroll>
            <Button
              variant="blueToBlack"
              className="fw-bold me-3 px-md-5 py-md-3"
            >
              Shop Now
            </Button>
            <Button variant="blackToBlue" className="fw-bold px-md-5 py-md-3">
              More Info
            </Button>
          </RevealOnScroll>
        </Col>
        <Col className="d-none d-xl-block flex-grow-1 position-relative">
          {HERO_IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              style={{
                right: "5rem",
                objectFit: "contain",
                zIndex: -i,
                position: "absolute",
                transform: `translate(${computeTranslation(i).x}px, ${
                  computeTranslation(i).y
                }px)`,
              }}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
