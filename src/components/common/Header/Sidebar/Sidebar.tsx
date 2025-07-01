import Links from "@components/common/Links.tsx";
import { Offcanvas } from "react-bootstrap";

import styles from "./style.module.css";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: Readonly<SidebarProps>) {
  return (
    <Offcanvas show={open} onHide={onClose}>
      <Offcanvas.Header
        closeButton
        className="d-flex justify-content-end pe-4"
      />
      <Offcanvas.Body className="px-0">
        <Links
          containerClassName="d-flex flex-column px-4"
          linkClassName={styles.link}
          activeClassName={styles.activeLink}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
}
