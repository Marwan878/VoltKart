import { Globe, Menu } from "lucide-react";
import Links from "../../Links";

import styles from "../style.module.css";

export default function BottomBar({
  onSidebarOpen,
}: {
  onSidebarOpen: () => void;
}) {
  return (
    <div className="d-none d-md-flex justify-content-between container">
      <button
        className="d-none d-md-inline d-lg-none"
        onClick={onSidebarOpen}
        aria-label="Open sidebar."
      >
        <Menu aria-hidden />
      </button>
      <Links
        containerClassName={`d-none d-lg-flex gap-3 ${styles.pageLinksContainer}`}
      />
      <div className="mx-4">
        <Globe />
        <span style={{ fontSize: "0.7rem" }} className="ms-2">
          Free Shipping On Orders From $99
        </span>
      </div>
    </div>
  );
}
