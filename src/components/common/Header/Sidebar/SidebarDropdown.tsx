import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

export default function SidebarDropdown({
  text,
  links,
}: {
  text: string;
  links: readonly { text: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown onToggle={(open) => setOpen(open)}>
      <Dropdown.Toggle
        className="w-100 d-flex justify-content-between py-2 px-4 bg-transparent"
        variant="light"
        id="dropdown-basic"
      >
        {text}
        <ChevronRight
          style={{
            transform: open ? "rotate(90deg)" : "",
            transition: "transform 0.3s ease",
          }}
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className="w-100">
        {links.map((link) => (
          <Dropdown.Item href="#" key={link.text}>
            {link.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
