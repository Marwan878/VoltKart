import { BRANDS_IMAGES_URLS } from "@constants";
import { Container, Stack } from "react-bootstrap";
import { SectionHeading } from "@components/ui";

import styles from "./styles.module.css";

export default function BrandsAndPartners() {
  return (
    <section className={styles.brands}>
      <Container>
        <SectionHeading>Brands And Partners</SectionHeading>
        <Stack
          direction="horizontal"
          className="mx-auto flex-wrap mb-3"
          style={{ maxWidth: "62rem" }}
        >
          {BRANDS_IMAGES_URLS.map((url) => (
            <img src={url} alt="" className="img-fluid mx-auto" key={url} />
          ))}
        </Stack>
        <p className="text-center">
          * Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut sit
          voluptatem accusantium doloremque
        </p>
      </Container>
    </section>
  );
}
