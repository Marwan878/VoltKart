import { Stack } from "react-bootstrap";
import { Logo } from "@components/ui";

import styles from "../style.module.css";

export default function Brand() {
  return (
    <Stack gap={2}>
      <Stack direction="horizontal" gap={3}>
        <Logo theme="light" />
        <h1 className="fs-3">VoltKart</h1>
      </Stack>
      <p className="fw-bold fs-5" style={{ color: "#beffef" }}>
        Your{" "}
        <span className="position-relative">
          <span className={styles.emphasisedPhrase}>one stop shop</span>
          <span className={styles.boldUnderline} />
        </span>{" "}
        for cutting edge tech
      </p>
    </Stack>
  );
}
