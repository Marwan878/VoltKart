import { TProduct } from "@types";
import { Filter } from "lucide-react";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import SidebarFilters from "../SidebarFilters/SidebarFilters";

export default function OffcanvasFilters({
  products,
}: {
  readonly products: TProduct[];
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="flex-shrink-0 border border-1 border-black rounded-pill px-2 py-1"
        style={{ fontSize: "0.9rem" }}
        onClick={() => setShow(true)}
      >
        <Filter size={18} /> Show Filters
      </button>
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarFilters products={products} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
