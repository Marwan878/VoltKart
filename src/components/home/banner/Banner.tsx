import { Button } from "@components/ui";
import { Container } from "react-bootstrap";

import styles from "../style.module.css";

export default function Banner() {
  return (
    <Container>
      <div
        className={`d-flex flex-column align-items-center p-3 ${styles.banner}`}
      >
        <div className="fw-bold fs-5">
          <a href="#">Sales</a> <span className="separator">|</span>{" "}
          <a href="#">Offers</a> <span className="separator">|</span>{" "}
          <a href="#">Discounts</a>
        </div>
        <img
          src="https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/product-page-16.png"
          alt="Download our app."
          className="my-3 mw-100"
        />
        <Button type="blackToWhite" className="get-now-btn">
          Get Now
        </Button>
      </div>
    </Container>
  );
}
