import { Menu } from "lucide-react";
import Links from "../../Links";

import styles from "./styles.module.css";

type BottomBarProps = {
  onSidebarOpen: () => void;
};

export default function BottomBar({ onSidebarOpen }: Readonly<BottomBarProps>) {
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
        linkClassName={styles.linkStyle}
        activeClassName={styles.activeLink}
      />
    </div>
  );
}
