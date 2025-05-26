import { Container, Stack } from "react-bootstrap";
import { Brand, BottomSection } from "./sections";
import Links from "../Links";

export default function Footer() {
  return (
    <footer className="bg-black">
      <Container className="pb-3 pt-5 text-white">
        <Stack className="flex-md-row justify-content-md-between mb-md-4">
          <Brand />
          <Links
            containerClassName="mb-3 d-md-flex align-items-md-center gap-md-3"
            linkClassName="text-white"
            linkStyle={{ letterSpacing: "0.06rem" }}
          />
        </Stack>
        <BottomSection />
      </Container>
    </footer>
  );
}
