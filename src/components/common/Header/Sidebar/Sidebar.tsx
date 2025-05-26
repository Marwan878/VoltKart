import { SIDEBAR_LINKS } from "@constants";
import { Offcanvas } from "react-bootstrap";
import SidebarDropdown from "./SidebarDropdown.tsx";
import Searchbar from "../Searchbar.tsx";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Offcanvas show={open} onHide={onClose}>
      <Offcanvas.Header closeButton className="pe-4">
        <Searchbar />
      </Offcanvas.Header>
      <Offcanvas.Body className="px-0">
        <ul>
          {Object.entries(SIDEBAR_LINKS).map(([text, links]) => (
            <SidebarDropdown key={text} text={text} links={links} />
          ))}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
