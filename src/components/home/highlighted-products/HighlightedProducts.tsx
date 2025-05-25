import { Button, RevealOnScroll } from "@components/ui";
import { useEffect, useState, type ReactNode } from "react";
import { Container, Stack } from "react-bootstrap";

import styles from "../style.module.css";

const screenSizeToMarginRight = {
  768: 30,
  900: -50,
  1024: -20,
  1200: -250,
  2560: 0,
};

function getImageMarginRight() {
  const width = window.innerWidth;
  if (width < 768) return 0;
  if (width < 900) return screenSizeToMarginRight[768];
  if (width < 1024) return screenSizeToMarginRight[900];
  if (width < 1200) return screenSizeToMarginRight[1024];
  if (width < 2560) return screenSizeToMarginRight[1200];
  return screenSizeToMarginRight[2560];
}

export default function HighlightedProducts() {
  return (
    <Container fluid className={styles.highlightedProducts}>
      <Stack className="flex-xl-row gap-xl-5">
        <HighlightedProduct
          imageUrl="https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-31.png"
          backgroundImageUrl="https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-30.jpg"
          imageMarginRight={getImageMarginRight()}
          imageWidth={`calc(200% / 3)`}
        >
          <h4 className="fs-1 fw-bold">Xbox Aqua Shift SE</h4>
          <div className="fw-bold fs-3 text-white">
            Core Wireless Controller
          </div>
          <p className="text-white fs-6">From Golden Gamer's Collection</p>
          <div className="d-flex align-items-center fs-1 fw-bold gap-2 mb-2">
            <span>only</span>
            <div>
              <span>$161</span>
              <span className="fs-6">.99</span>
            </div>
          </div>
          <RevealOnScroll>
            <Button type="whiteToBlack" className="fw-bold me-2">
              Buy Now
            </Button>
            <Button type="blackToWhite" className="fw-bold">
              More Info
            </Button>
          </RevealOnScroll>
        </HighlightedProduct>
        <HighlightedProduct
          imageUrl="https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-30.png"
          backgroundImageUrl="https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-29.jpg"
          oppositeToCursor={true}
          imageMarginRight={getImageMarginRight() + 110}
          imageWidth="75%"
        >
          <h4 className="fs-1 fw-bold text-white">DJI FPV Drone</h4>
          <div className="fw-bold fs-3" style={{ color: "#00d2d4" }}>
            Immersive Flight Experience
          </div>
          <p className="fs-6" style={{ color: "#beffef", maxWidth: "18rem" }}>
            Optional: DJI FPV Goggles V2, remote controller 2 and DJI motion
            controller
          </p>
          <div className="d-flex align-items-center fs-1 fw-bold gap-2 mb-2 text-white">
            <span>from</span>
            <div>
              <span>$999</span>
              <span className="fs-6">.99</span>
            </div>
          </div>
          <RevealOnScroll>
            <Button type="whiteToAqua" className="fw-bold me-2">
              Buy Now
            </Button>
            <Button type="aquaToWhite" className="fw-bold">
              More Info
            </Button>
          </RevealOnScroll>
        </HighlightedProduct>
      </Stack>
    </Container>
  );
}

function HighlightedProduct({
  imageUrl,
  oppositeToCursor = false,
  backgroundImageUrl,
  children,
  imageMarginRight = 0,
  imageWidth,
}: {
  imageUrl: string;
  oppositeToCursor?: boolean;
  backgroundImageUrl: string;
  children: ReactNode;
  imageMarginRight?: number;
  imageWidth: string;
}) {
  const screenCenter = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  const maximumDisplacement = 15;

  const [cursorCoordinates, setCursorCoordinates] = useState({
    x: screenCenter.x,
    y: screenCenter.y,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;

      setCursorCoordinates({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div
      className="rounded-2 ps-4 py-5 position-relative w-lg-auto flex-grow-1 overflow-x-clip mb-5"
      style={{
        backgroundImage: `url("${backgroundImageUrl}")`,
      }}
    >
      <div className="d-flex flex-column gap-2">{children}</div>
      <img
        src={imageUrl}
        alt=""
        className="position-absolute top-0 d-none d-md-block z-1 mt-5"
        style={{
          left: `calc(100% - 35rem)`,
          transform: `translate(${
            (maximumDisplacement / screenCenter.x) *
              (cursorCoordinates.x - screenCenter.x) *
              (oppositeToCursor ? -1 : 1) -
            imageMarginRight
          }px, ${
            (maximumDisplacement / screenCenter.y) *
            (cursorCoordinates.y - screenCenter.y) *
            (oppositeToCursor ? -1 : 1)
          }px)`,
          width: imageWidth,
          maxWidth: "35rem",
        }}
      />
    </div>
  );
}
