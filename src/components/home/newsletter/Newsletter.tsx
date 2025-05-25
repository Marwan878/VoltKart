import { Button } from "@components/ui/index";
import { Container, Form } from "react-bootstrap";

export default function Newsletter() {
  return (
    <div
      className="mt-5"
      style={{
        backgroundImage:
          'url("https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-18.jpg?id=146")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="d-flex flex-column flex-md-row py-5 gap-md-3 align-items-md-center justify-content-md-between">
        <div>
          <h5 className="fs-1 fw-bold mb-1">Weekly Newsletter</h5>
          <p className="fs-5 fw-bold text-white">
            Subscribe and recieve $10 coupon!
          </p>
          <p className="fs-6 text-white">
            Get all promotions info about our sales and offers
          </p>
        </div>
        <Form
          action=""
          className="d-flex flex-column mt-3 flex-lg-row gap-lg-2"
        >
          <Form.Group>
            <Form.Control
              type="email"
              className="rounded-pill py-3 mb-3 text-center fw-bold fs-4 bg-transparent border-black border-2"
              placeholder="Enter your email..."
              style={{ height: "4rem" }}
            ></Form.Control>
          </Form.Group>
          {/* <input type="email" className="mb-2 border-black rounded-pill" /> */}
          <Button
            type="blackToWhite"
            className="fw-bold py-3 fs-5"
            style={{ height: "4rem" }}
          >
            Subscribe
          </Button>
        </Form>
      </Container>
    </div>
  );
}
